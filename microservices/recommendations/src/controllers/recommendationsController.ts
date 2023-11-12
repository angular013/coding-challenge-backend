import {calculateRecommendationsService} from '../services'


exports.calculateRecommendations = async (req: any, res: any) => {
    try {

        let recommendations = [];

        if(Array.isArray(req.body) && req.body.length > 0){
            recommendations.push(await calculateRecommendationsService(req.body));
        }
        console.log("recommendations:")
        console.log(recommendations)
        res.json(recommendations);

    } catch (error) {
        res.status(500).json({ error: 'Failed to calculate Recommendations' });
    }

};
    
       