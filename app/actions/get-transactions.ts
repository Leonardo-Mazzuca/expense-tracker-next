"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {

  const {userId} = await auth();

  if(!userId) {
      return {error: 'User not found'}
  }

  try {

    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return { transactions };
  } catch (error) {
    return { error: "Transactions not found" };
  }
  
}

export default getTransactions;
