import { ApolloServerPluginDrainHttpServer , ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloError, ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { createContext } from "./context";
import  resolvers  from "./resolvers/resolver";
import { buildSubgraphSchema } from '@apollo/subgraph';
import gql from 'graphql-tag';
import { GraphQLError } from "graphql";
const fs = require('fs');



//import cookieParser from "cookie-parser";

const IS_DEV = process.env.NODE_ENV === "development";
const localOrigins = [/^http:\/\/localhost:\d{4}$/];
const prodOrigins = [/^https:\/\/.*\.yourdomain\.com$/];

const schemaString = fs.readFileSync('./schema.graphql', 'utf8');
const typeDefs = gql(schemaString);

async function startApolloServer() {
	const app = express();
	const httpServer = http.createServer(app);
	const server = new ApolloServer({
		schema: buildSubgraphSchema({ typeDefs, resolvers }),
		context: createContext,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageGraphQLPlayground()
		],
		debug: true,
		introspection: process.env.NODE_ENV === 'development' ? true : false,
		formatError: (error) => {
			console.log(error);
			if (error.originalError instanceof ApolloError) {
				return error;
			}
			//const errId = uuidv4();
			//console.log(error);
			// logger.error(`${errId} ${error.message}`);
			// if (Constants.IS_DEV) {
			// 	logger.error(error);
			// 	return {
			// 		message: error.message,
			// 	};
			// }
			return new GraphQLError(`Internal error: `);
		},
	});
	await server.start();

	//app.use(cookieParser())

	server.applyMiddleware({ 
		app,
		cors: {
			origin: ["http://localhost:4000/graphql"],
			credentials: true,
		},
	});
	await new Promise<void>((resolve) => {
        httpServer.listen({ port: 4010 })
        resolve()
    });
	console.log(`🚀 Server ready at http://localhost:4010${server.graphqlPath}`);
}

// Start server
startApolloServer()