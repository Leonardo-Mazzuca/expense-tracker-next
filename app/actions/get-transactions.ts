"use server";
import { db } from "@/lib/db";

async function getTransactions(userId: string): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
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
