import { seedProducts} from './productSeed';
import { seedQuestionnaire} from './questionnaireSeed';
import { seedPages} from './pageSeed';
import { seedQuestionTypes} from './questionTypeSeed';
import { seedQuestions} from './questionSeed';
import { seedAnswers} from './answerSeed';
import { seedUserRoles} from './userRoleSeed';
import { seedUsers} from './userSeed';
import { seedMatrix} from './matrixSeed';

async function main() {
    await seedQuestionnaire();
    await seedPages();
    await seedQuestionTypes();
    await seedQuestions();
    await seedAnswers();
    // await seedUserRoles();
    // await seedUsers();
    // await seedProducts();
    // await seedMatrix();
}

main();
