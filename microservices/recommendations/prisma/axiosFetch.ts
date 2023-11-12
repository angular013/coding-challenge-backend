const axios = require("axios");

const endpoint = "http://localhost:4000/graphql";
const headers = {
	"content-type": "application/json",
    //"Authorization": "<token>"
};

const getAllAnswers = {
    operationName: "getAllAnswers",
    query: `query {
        getAllAnswers {
          uuid
          value
        }
      }`,
    variables: {}
};

export async function fetchAllAnswers() {
    try {
        const response = axios({
            url: endpoint,
            method: 'post',
            headers: headers,
            data: {query : getAllAnswers.query}
          });
          console.log(response)        
        return response; // Return the data from the response
    } catch (error) {
      throw error; // Optionally handle or log the error here
    }
}

async function callFunc(){
  const axiosAnswers = await fetchAllAnswers();
  console.log(axiosAnswers.data.data.getAllAnswers)
}

//callFunc()




