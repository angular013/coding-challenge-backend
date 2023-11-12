import './open-telemetry'; // Import the OpenTelemetry configuration
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginDrainHttpServer , ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from '@apollo/server';
import express from "express";
import http from "http";
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
import { BaseContext } from '@apollo/server';



const supergraphSdl = readFileSync('./supergraph.graphql').toString();

const IS_DEV = process.env.NODE_ENV === "development";
const localOrigins = [/^http:\/\/localhost:\d{4}$/];
const prodOrigins = [/^https:\/\/.*\.yourdomain\.com$/];

const gateway = new ApolloGateway({
    supergraphSdl,
});

const myPlugin = {
    // Fires whenever a GraphQL request is received from a client.
    async requestDidStart(requestContext: any) {
      console.log('Request started! Query:\n' + requestContext.request.query);
  
      return {
        // Fires whenever Apollo Server will parse a GraphQL
        // request to create its associated document AST.
        async parsingDidStart(requestContext: any) {
          console.log('Parsing started!');
        },
  
        // Fires whenever Apollo Server will validate a
        // request's document AST against your GraphQL schema.
        async validationDidStart(requestContext: any) {
          console.log('Validation started!');
          console.log(requestContext.request)
        },
      };
    },
  };

async function startApolloServer() {
	const app = express();
	const httpServer = http.createServer(app);
	const server = new ApolloServer({
      gateway,
      plugins: [myPlugin],
        
	});

}

async function startApolloServer02() {
    const server = new ApolloServer({ 
      gateway, 
      });
    const { url } = await startStandaloneServer(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
      listen: { port: 4000 },
    });
  
  console.log(`🚀  Server ready at ${url}`);
  }
  
  startApolloServer02();

