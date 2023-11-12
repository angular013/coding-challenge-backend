

import { seedUserRoles} from './userRoleSeed';
import { seedUsers} from './userSeed';
import { seedUserOnQuestionnaire} from './userOnQuestionnaireSeed';




async function main() {

    await seedUserRoles();
    await seedUsers();
    await seedUserOnQuestionnaire();

}

main();
