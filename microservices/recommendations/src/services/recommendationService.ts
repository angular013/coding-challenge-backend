import { MatrixRecommendedProductDB } from '../db'
import { storeResults } from '../db'



const calculateRecommendationsService = async (userInputArray: any) => {
  try {
     const recommendations = await MatrixRecommendedProductDB(userInputArray)
     
    if(Array.isArray(recommendations) && recommendations.length > 0){
        await storeResults(recommendations, userInputArray[0].questionnaireId, userInputArray[0].userId)
    }
    return recommendations
  } catch(error) {
    throw error;
  }
}


export default calculateRecommendationsService