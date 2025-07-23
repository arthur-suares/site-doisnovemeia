// src/controllers/userController.ts

import { prisma } from '../models/prisma'; // Usando seu caminho de importação
import bcrypt from 'bcrypt'; // Importe o bcrypt

// Função que você já tinha, está ótima.
export async function getAllUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

// Sua função createUser, agora corrigida para usar hash.
export async function createUser(name: string, email: string, password: string) {
  const passwordHash = await bcrypt.hash(password, 10); // Gera o hash da senha

  try {
    return await prisma.user.create({
      data: { name, email, password: passwordHash }, // Salva o hash
    });
  } catch (error) {
    console.error('---- Detailed Prisma error:', error);
    throw error;
  }
}

// --- NOVA FUNÇÃO ---
// Interface para organizar os parâmetros da nova função.
interface ChangePasswordParams {
  userId: string;
  currentPassword_DB: string;
  newPassword_DB: string;
}

export async function changeUserPassword({
  userId,
  currentPassword_DB,
  newPassword_DB,
}: ChangePasswordParams) {
  // 1. Busca o usuário e sua senha atual (o hash)
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user || !user.password) {
    // Adicionado !user.password para garantir que o campo existe
    throw new Error('Usuário não encontrado.');
  }

  // 2. Compara a senha que o usuário digitou com o hash salvo no banco
  const isPasswordValid = await bcrypt.compare(currentPassword_DB, user.password);

  if (!isPasswordValid) {
    throw new Error('A senha atual está incorreta.');
  }

  // 3. Se a senha estiver correta, cria um hash para a nova senha
  const newPasswordHash = await bcrypt.hash(newPassword_DB, 10);

  // 4. Atualiza o usuário com o hash da nova senha
  await prisma.user.update({
    where: { id: userId },
    data: {
      password: newPasswordHash,
    },
  });

  return { success: true, message: 'Senha alterada com sucesso!' };
}