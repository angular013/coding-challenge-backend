import { PrismaClient } from './generated/clientQuestionnaire';

const prisma = new PrismaClient();

export async function seedMatrix() {

    try {
        const products = await prisma.product.findMany();
        const answers = await prisma.answer.findMany();

        if (products && answers) {
            const matrixData: {
                value: number;
                productId: string;
                answerId: string;
            }[] = [];

            for (const product of products) {
                for (const answer of answers) {
                    const randomValue = Math.floor(Math.random() * 2); // Generates either 0 or 1
                    matrixData.push({
                        value: randomValue,
                        productId: product.uuid,
                        answerId: answer.uuid,
                    });
                }
            }

            console.log(`Seeding matrix...`);
            for (const data of matrixData) {
                await prisma.matrixRecommendation.create({
                    data: {
                        value: data.value,
                        productId: data.productId,
                        answerId: data.answerId,
                    },
                });
            }
            console.log(`Matrix seeding finished.`);
        }

    } catch (error) {
        console.error('Error seeding matrix:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
export async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedMatrix Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}