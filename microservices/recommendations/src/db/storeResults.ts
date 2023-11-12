import { prisma } from "../clients";


const storeResults = async (recommendations: any, questionnaireId: string, userId: string) => {

    const existingResults = await prisma.result.findFirst({
        where: {
          questionnaireId: questionnaireId,
          userId: userId,
        },
    });

    console.log("storeResults reached")

    if(!existingResults){

        console.log("storeResults !existingResults reached")

        const createResult = await prisma.result.create({
            data: {
              userId: userId,
              questionnaireId: questionnaireId,
              products: {
                create: recommendations.map((recommendation: any) => ({
                    productId: recommendation.productId,
                  })),
              },
            },
          })
                   
        return createResult
    }
    else{
        console.log("storeResults existingResults reached");

        // Delete existing products in the junction table (ProductOnResult)
        await prisma.productOnResult.deleteMany({
          where: {
            resultId: existingResults.uuid,
          },
        });
    
        // Add new products to the existing result
        const updateResult = await prisma.result.update({
          where: {
            uuid: existingResults.uuid,
          },
          data: {
            products: {
              create: recommendations.map((recommendation: any) => ({
                productId: recommendation.productId,
              })),
            },
          },
        });
    
        return updateResult;
    }


  }

export default storeResults;