const axios = require("axios");

const endpoint = "http://localhost:4000/graphql";
const headers = {
	"content-type": "application/json",
    //"Authorization": "<token>"
};

const getAllQuestionnaires = {
    operationName: "getAllQuestionnaires",
    query: `query {
        getAllQuestionnaires {
          uuid
          name
        }
      }`,
    variables: {}
};

const getAllQuestionnairesPlusRelatedData = {
    operationName: "getAllQuestionnaires",
    query: `query {
        getAllQuestionnaires {
          uuid
          name
          pages{
              uuid
              pageLevel
          }
        }
      }`,
    variables: {}
};

export async function fetchAllQuestionnaires() {
    try {
        const response = axios({
            url: endpoint,
            method: 'post',
            headers: headers,
            data: {query : getAllQuestionnaires.query}
          });        
        return response; // Return the data from the response
    } catch (error) {
      throw error; // Optionally handle or log the error here
    }
}

export async function fetchAllQuestionnairesAndRelations() {
    try {
        const response = axios({
            url: endpoint,
            method: 'post',
            headers: headers,
            data: {query : getAllQuestionnairesPlusRelatedData.query}
          });
          
        return response; // Return the data from the response
    } catch (error) {
      throw error; // Optionally handle or log the error here
    }
}

