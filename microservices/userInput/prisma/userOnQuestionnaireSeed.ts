import { PrismaClient } from './generated/clientUserInput'
import bcrypt from 'bcrypt';
import {fetchAllQuestionnaires} from './axiosFetch';

const prisma = new PrismaClient();
// const prisma = new PrismaClient({
//     log: ['query'], // Add 'query' to enable query logging
//   });


export async function seedUserOnQuestionnaire() {

    try {
        const axiosQuestionnaire = await fetchAllQuestionnaires();
        const questionnaires = axiosQuestionnaire.data.data.getAllQuestionnaires;
        //console.log(questionnaires)
        //console.log(axiosQuestionnaire.data.getAllQuestionnaires[0])
        //process.exitCode = 1
        const users = await prisma.user.findMany();

        if (users) {
            const userOnQuestionnaireData: {
                userId: string;
                questionnaireId: string;
            }[] = [];

            for (const user of users) {
                if(user.username !== "adminUser"){
                    for (const questionnaire of questionnaires) {
                        userOnQuestionnaireData.push(
                            {
                                userId: user.uuid,
                                questionnaireId: questionnaire.uuid,
                            }
                        );
                    }            
                }
            
            }

            console.log(`Seeding userOnQuestionnaire...`);
            for (const data of userOnQuestionnaireData) {
                await prisma.userOnQuestionnaire.create({
                    data: {
                        userId: data.userId,
                        questionnaireId: data.questionnaireId
                    },
                });
            }
            console.log(`UserOnQuestionnaire seeding finished.`);
        }

    } catch (error) {
        console.error('Error seeding UserOnQuestionnaire:', error);
    } finally {
        await closePrisma();
    }
}

// Close Prisma connection if needed
export async function closePrisma() {
    try {
        await prisma.$disconnect(); // Close Prisma client for products
    } catch (error) {
        console.error(`Error disconnecting seedUserOnQuestionnaire Prisma client: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}