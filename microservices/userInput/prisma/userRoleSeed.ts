import { PrismaClient } from './generated/clientUserInput'

const prisma = new PrismaClient();

const userRoleData = [
  {
    name: 'USER',
  },
  {
    name: 'ADMIN',
  }
];

export async function seedUserRoles() {
  try {

    await prisma.userRole.deleteMany({});
    await prisma.userOnQuestionnaire.deleteMany({});
    await prisma.user.deleteMany({});


    console.log(`Seeding user roles...`);
    for (const data of userRoleData) {
      await prisma.userRole.create({
        data: {
          name: data.name
        },
      });
    }
    console.log(`User roles seeding finished.`);
  } catch (error) {
    console.error('Error seeding User roles:', error);
  } finally {
    await closePrisma();
  }
}

// Close Prisma connection if needed
async function closePrisma() {
  try {
    await prisma.$disconnect(); // Close Prisma client for products
  } catch (error) {
    console.error(`Error disconnecting seedUserRoles Prisma client: ${error}`);
    process.exit(1); // Exit the process with an error code
  }
}