// src/controllers/userController.ts

import { prisma } from '../models/prisma';
import { hash, compare } from 'bcrypt'; 

// Função para buscar todos os usuários (sem senha)
export async function getAllUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

// Função para criar um novo usuário com senha criptografada
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

// Interface para a função de alterar senha
interface ChangePasswordParams {
  userId: string;
  currentPassword_DB: string;
  newPassword_DB: string;
}

// Função para alterar a senha do usuário
export async function changeUserPassword({
  userId,
  currentPassword_DB,
  newPassword_DB,
}: ChangePasswordParams) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user || !user.password) {
    throw new Error('Usuário não encontrado.');
  }

  const isPasswordValid = await compare(currentPassword_DB, user.password);

  if (!isPasswordValid) {
    throw new Error('A senha atual está incorreta.');
  }

  const newPasswordHash = await hash(newPassword_DB, 10);

  await prisma.user.update({
    where: { id: userId },
    data: {
      password: newPasswordHash,
    },
  });

  return { success: true, message: 'Senha alterada com sucesso!' };
}

interface ChangeEmailParams {
  userId: string;
  newEmail: string;
  password_DB: string; 
}

export async function changeUserEmail({
  userId,
  newEmail,
  password_DB,
}: ChangeEmailParams) {
  // Busca o usuário e sua senha atual para verificação
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  // Verifica se a senha fornecida pelo usuário está correta
  const isPasswordValid = await compare(password_DB, user.password);
  if (!isPasswordValid) {
    throw new Error('Senha incorreta. Verificação falhou.');
  }

  // Verifica se o novo e-mail já está em uso por outra conta
  const existingEmail = await prisma.user.findUnique({
    where: { email: newEmail },
  });
  if (existingEmail && existingEmail.id !== userId) {
    throw new Error('Este e-mail já está em uso por outra conta.');
  }

  // Se todas as verificações passarem, atualiza o e-mail no banco de dados
  await prisma.user.update({
    where: { id: userId },
    data: { email: newEmail },
  });

  return { success: true, message: 'E-mail alterado com sucesso!' };
}