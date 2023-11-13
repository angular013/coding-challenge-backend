# Backend Developer Coding Challenge

The services are structured using npm workspaces for monorepo structure. 

1) Import the **FoxBaseMicroservices.postman_collection.json** in your postman to run the queries and mutations.

2) For each microservice, install dependencies. They will be installed in the root of the monorepo:

`npm i`

3) Then migrate prisma models. In the **.env** file modify the **DATABASE_URL** variable accordingly. Then run :

`npm run migrate` then `npm run seed`

All the **prisma models** are defined in the prisma folder inside the file **schema.prisma**


## Microservices

1) Questionnaire
3) UserInput
4) Recommendations ( products table added in this to save time instead of seperate products microservice )
5) Gateway
