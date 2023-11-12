import { prisma } from "../clients";


const MatrixRecommendedProductDB = async (userInputArray: any) => {

    const answerIds: string[] = [];

    for (const userInput of userInputArray) {
      if(userInput.answerSelected == "yes"){
        answerIds.push(userInput.answerId)
      }
    }

    const recommendations =  await prisma.matrixRecommendation.findMany({
                              where: {
                                answerId: {
                                  in: answerIds,
                                },
                                value: {
                                  gt: 0,
                                },
                              },
                              distinct: ['productId'],
                            });

    // console.log("recommendations:")
    // console.log(recommendations)               
    return recommendations
  }

export default MatrixRecommendedProductDB;