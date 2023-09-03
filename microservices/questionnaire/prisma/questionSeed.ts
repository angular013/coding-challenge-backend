import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedQuestions() {

    try {
        // Fetch all available pages
        const pages = await prisma.page.findMany();

        // Fetch all available question types
        const questionTypes = await prisma.questionType.findMany();

        if (pages && questionTypes) {
            // Sample data for questions
            const questionsData: {
                question: string;
                pageId: string;
                questionTypeId: string;
            }[] = [];

            // Generate questions based on available pages and question types
            for (const page of pages) {
                for (const questionType of questionTypes) {
                    questionsData.push({
                        question: `Question on page level: ${page.pageLevel} and Type ${questionType.name}`,
                        pageId: page.uuid,
                        questionTypeId: questionType.uuid,
                    });
                }
            }

            console.log(`Seeding question...`);
            for (const data of questionsData) {
                await prisma.question.create({
                    data: {
                        question: data.question,
                        pageId: data.pageId,
                        questionTypeId: data.questionTypeId,
                    },
                });
            }
            console.log(`Questions seeding finished.`);
        }

    } catch (error) {
        console.error('Error seeding questions:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
export async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedQuestions Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}