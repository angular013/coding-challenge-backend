import { PrismaClient } from './generated/clientUserInput'
import bcrypt from 'bcrypt';
import {fetchAllQuestionnaires} from './axiosFetch';

const prisma = new PrismaClient();
// const prisma = new PrismaClient({
//     log: ['query'], // Add 'query' to enable query logging
//   });


export async function seedUsers() {

    try {
        const userRoles = await prisma.userRole.findMany();

        if (userRoles) {
            const userData: {
                username: string;
                password: string;
                userRoleId: string;
            }[] = [];

            for (const userRole of userRoles) {
                userData.push(
                    {
                        username: userRole.name == "USER" ? "normalUser" : "adminUser",
                        password: userRole.name == "USER" ? await bcrypt.hash('userpassword', 10): 
                                                            await bcrypt.hash('adminpassword', 10),
                        userRoleId: userRole.uuid,
                    }
                );
            }

            console.log(`Seeding users...`);
            for (const data of userData) {
                await prisma.user.create({
                    data: {
                        username: data.username,
                        password: data.password,
                        userRoleId: data.userRoleId,
                    },
                });
            }
            console.log(`Users seeding finished.`);
        }

    } catch (error) {
        console.error('Error seeding users:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
export async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedUsers Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}