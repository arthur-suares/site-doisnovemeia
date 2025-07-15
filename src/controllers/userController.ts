// src/controllers/userController.ts
import { prisma } from '../models/prisma';

export async function getAllUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      //não deixar password ser puxado
    }
  });
}

export async function createUser(name: string, email: string, password: string) {
  try {
    return await prisma.user.create({
      data: { name, email, password},
    });
  } catch (error) {
    console.error('---- Detailed Prisma error:', error);
    throw error;
  }
}
