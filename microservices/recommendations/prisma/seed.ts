

import { seedProducts} from './productSeed';
import { seedMatrix} from './matrixSeed';




async function main() {

    await seedProducts();
    await seedMatrix();

}

main();
