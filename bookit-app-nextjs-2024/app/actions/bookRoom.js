'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { ID } from 'node-appwrite';
import { createSessionClient } from '@/config/appwrite';
import checkAuth from './checkAuth';

async function bookRoom(previousState, formData) {
  const sessionCookie = cookies().get('appwrite-session');
  
  if (!sessionCookie) {
    redirect('/');
  };

  try {
    const { databases } = await createSessionClient(sessionCookie.value);

    // Get user's ID
    const { user } = await checkAuth();
    if (!user) {
      return {
        error: 'You must be logged in to book a room'
      };
    };

    // Extract date and time from the formData
    const checkInDate = formData.get('check_in_date');
    const checkInTime = formData.get('check_in_time');
    const checkOutDate = formData.get('check_out_date');
    const checkOutTime = formData.get('check_out_time');

    // Combine date and time to ISO 8601 format
    const checkInDateTime = `${checkInDate}T${checkInTime}`;
    const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;

    const bookingData = {
      check_in: checkInDateTime,
      check_out: checkOutDateTime,
      user_id: user.id,
      room_id: formData.get('room_id')
    };

    // Create booking
    const newBooking = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      ID.unique(),
      bookingData
    );

    // Revalidate cache
    revalidatePath('/bookings', 'layout');

    return {
      success: true  
    };
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong booking the room'
    };
  };
};

export default bookRoom;