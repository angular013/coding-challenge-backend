import { PrismaClient } from './generated/clientQuestionnaire';

const prisma = new PrismaClient();

const pageData = [
  {
    pageLevel: 0
  },
  {
    pageLevel: 1
  },
  {
    pageLevel: 2
  },
];

export async function seedPages() {

  try {
    const questionnaire = await prisma.questionnaire.findFirst({
      where: {
        name: 'Knauf Questionnaire',
      },
    });

    if (questionnaire) {
      console.log(`Seeding pages...`);
      for (const data of pageData) {
        await prisma.page.create({
          data: {
            pageLevel: data.pageLevel,
            questionnaireId: questionnaire.uuid
          },
        });
      }
      console.log(`Pages seeding finished.`);
    }
  } catch (error) {
    console.error('Error seeding pages:', error);
  } finally {
    await closePrisma();
  }
}

// Close Prisma connection if needed
async function closePrisma() {
  try {
    await prisma.$disconnect(); // Close Prisma client for products
  } catch (error) {
    console.error(`Error disconnecting seedPages Prisma client: ${error}`);
    process.exit(1); // Exit the process with an error code
  }
}