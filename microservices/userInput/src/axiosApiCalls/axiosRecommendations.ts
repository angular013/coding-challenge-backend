const axios = require("axios");

const endpointCalculateRecommendations = "http://localhost:9191/api/CalculateRecommendations";
const headers = {
	"content-type": "application/json",
    //"Authorization": "<token>"
};

export async function calculateRecommendations(postDataRecommendations: any) {
    try {
        const response = axios({
            url: endpointCalculateRecommendations,
            method: 'post',
            headers: headers,
            data: postDataRecommendations
          });        
        return response; // Return the data from the response
    } catch (error) {
      throw error; // Optionally handle or log the error here
    }
}

