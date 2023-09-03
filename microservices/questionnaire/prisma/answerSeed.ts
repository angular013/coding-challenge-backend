import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedAnswers() {

    try {
        const questions = await prisma.question.findMany();

        if (questions) {
            const answerData: {
                value: string;
                questionId: string;
            }[] = [];

            for (const question of questions) {
                answerData.push(
                    {
                        value: `Ansawer 1 for question`,
                        questionId: question.uuid,
                    },
                    {
                        value: `Ansawer 2 for question`,
                        questionId: question.uuid,
                    }
                );
            }

            console.log(`Seeding answers...`);
            for (const data of answerData) {
                await prisma.answer.create({
                    data: {
                        value: data.value,
                        questionId: data.questionId,
                    },
                });
            }
            console.log(`Answers seeding finished.`);
        }

    } catch (error) {
        console.error('Error seeding answers:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
export async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedAnswers Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}