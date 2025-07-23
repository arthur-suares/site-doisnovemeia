import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import dotenv from 'dotenv'; 

dotenv.config();
const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@exemplo.com";
  const adminPassword = "senhaSuperForte123";

  console.log('Iniciando o seed do banco de dados...');

  const passwordHash = await hash(adminPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {}, 
    create: {
      email: adminEmail,
      name: 'Admin',
      password: passwordHash,
    },
  });

  console.log(`Usuário Admin criado/verificado: ${adminUser.email}`);
  console.log('Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });