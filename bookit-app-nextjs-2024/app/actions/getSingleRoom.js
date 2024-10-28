'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createAdminClient } from '@/config/appwrite';

async function getSingleRoom(id) {
  try {
    const { databases } = await createAdminClient();   

    // Fetch rooms
    const room = await databases.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        id
    );

    // Revalidate the cache for this path
    revalidatePath('/', 'layout');

    return room;
  } catch (error) {
    console.error('Failed to get room!', error);
    redirect('/error');
  };
};

export default getSingleRoom;