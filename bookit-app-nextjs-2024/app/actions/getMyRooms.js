'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { createSessionClient } from '@/config/appwrite';

async function getMyRooms() {
  const sessionCookie = cookies().get('appwrite-session');
  
  if (!sessionCookie) {
    redirect('/');
  };

  try {
    const { account, databases } = await createSessionClient(sessionCookie.value);

    // Get user's ID
    const user = await account.get();
    const userId = user.$id;

    // Fetch users rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal('user_id', userId)]
    );

    return rooms;
  } catch (error) {
    console.error(error);
    redirect('/error');
  };
};

export default getMyRooms;