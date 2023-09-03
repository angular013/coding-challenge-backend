import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const questionTypeData = [
  {
    name: 'Card',
  },
  {
    name: 'Slider',
  }
];

export async function seedQuestionTypes() {
  try {
    console.log(`Seeding question types...`);
    for (const data of questionTypeData) {
      await prisma.questionType.create({
        data: {
          name: data.name
        },
      });
    }
    console.log(`Question types seeding finished.`);
  } catch (error) {
    console.error('Error seeding question types:', error);
  } finally {
    await closePrisma();
  }
}

// Close Prisma connection if needed
async function closePrisma() {
  try {
    await prisma.$disconnect(); // Close Prisma client for products
  } catch (error) {
    console.error(`Error disconnecting seedQuestionTypes Prisma client: ${error}`);
    process.exit(1); // Exit the process with an error code
  }
}