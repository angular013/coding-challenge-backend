import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productData = [
    {
        name: 'Product 1',
        shortDesciprtion: 'Short description for Product 1',
    },
    {
        name: 'Product 2',
        shortDesciprtion: 'Short description for Product 2',
    }
];

export async function seedProducts() {

    try {
        console.log(`Seeding products...`);
        for (const data of productData) {
            await prisma.product.create({
                data: {
                    name: data.name,
                    shortDesciprtion: data.shortDesciprtion
                },
            });
        }
        console.log(`Products seeding finished.`);
    } catch (error) {
        console.error('Error seeding products:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedProducts Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}