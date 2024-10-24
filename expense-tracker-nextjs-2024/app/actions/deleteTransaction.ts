'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  };

  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId,
      },
    });

    revalidatePath('/');

    return { message: 'Transaction deleted' };
  } catch (error) {
    return { error: 'Database error' };
  };
};

export default deleteTransaction;