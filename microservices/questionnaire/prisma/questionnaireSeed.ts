import { PrismaClient } from './generated/clientQuestionnaire';

const prisma = new PrismaClient();

const questionnaireData = [
    {
        name: 'Knauf Questionnaire',
    }
];

export async function seedQuestionnaire() {
    try {
        // Truncate existing data in this order due to foreign key constraints(delete all records)
        // await prisma.matrixRecommendation.deleteMany({});
        // await prisma.user.deleteMany({});
        // await prisma.userRole.deleteMany({});
        await prisma.answer.deleteMany({});
        await prisma.question.deleteMany({});
        await prisma.questionType.deleteMany({});
        await prisma.page.deleteMany({});
        await prisma.questionnaire.deleteMany({});
        //await prisma.product.deleteMany({});

        console.log(`Seeding questionnaire...`);
        for (const data of questionnaireData) {
            await prisma.questionnaire.create({
                data: {
                    name: data.name
                },
            });
        }
        console.log(`Questionnaire seeding finished.`);
    } catch (error) {
        console.error('Error truncatin or seeding Questionnaire:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedQuestionnaire Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}