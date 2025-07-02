// src/controllers/userController.ts
import { prisma } from '../models/prisma';

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function createUser(name: string, email: string) {
  try {
    return await prisma.user.create({
      data: { name, email },
    });
  } catch (error) {
    console.error('---- Detailed Prisma error:', error);
    throw error;
  }
}
