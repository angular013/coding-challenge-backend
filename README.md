# Backend Developer Coding Challenge

The services are structured using npm workspaces for monorepo structure. 

1) Import the **FoxBaseMicroservices.postman_collection.json** in your postman to run the queries and mutations.

2) For each microservice, install dependencies. They will be installed in the root of the monorepo:

`npm i`

3) Then migrate prisma models. In the **.env** file modify the **DATABASE_URL** variable accordingly. Then run :

`npm run migrate` then `npm run seed`

All the **prisma models** are defined in the prisma folder inside the file **schema.prisma**

4) Run the following command to build and run 

`npm run dev`


## Microservices

1) **Questionnaire** (GraphQL based)
3) **UserInput** (GraphQL based)
4) **Recommendations** ( products table added in this to save time instead of seperate products microservice )
   
   Simple **Express REST APIs** which are accessed by the **UserInput microservice** 
6) **Gateway**
   

## GraphQL

In the service root **schema.graphql** file containes the graphQL schema definitions and the **resolvers** folder inside the **src** folder containes code for **queries** and **mutations**
