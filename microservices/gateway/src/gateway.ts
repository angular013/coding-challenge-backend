import './open-telemetry'; // Import the OpenTelemetry configuration
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginDrainHttpServer , ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';



const supergraphSdl = readFileSync('./supergraph.graphql').toString();

const IS_DEV = process.env.NODE_ENV === "development";
const localOrigins = [/^http:\/\/localhost:\d{4}$/];
const prodOrigins = [/^https:\/\/.*\.yourdomain\.com$/];

const gateway = new ApolloGateway({
    supergraphSdl,
    // supergraphSdl: new IntrospectAndCompose({
    //     subgraphs: [
    //       { name: 'questionnaire', url: 'http://localhost:4010/graphql' },
    //       // ...additional subgraphs...
    //     ],
    //   }),
    // serviceList: [
    //     {
    //       name: 'questionnaire',
    //       url: "http://localhost:4010/graphql",
    //     },
    // ],
});

async function startApolloServer() {
	const app = express();
	const httpServer = http.createServer(app);
	const server = new ApolloServer({
		gateway,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageGraphQLPlayground()
		],
		debug: true,
        context: ({ req }) => {
            // You can log information related to the incoming request here
            //console.log(`Received request: ${req.method} ${req.url} ${req.body}`);
            // Other context setup...
        
            return {};
          },
	});
	await server.start();

	//app.use(cookieParser())

	server.applyMiddleware({ 
		app,
		cors: {
			origin: IS_DEV ? localOrigins : prodOrigins,
			credentials: true,
		},
	});
	await new Promise<void>((resolve) => {
        httpServer.listen({ port: 4000 })
        resolve()
    });
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

// Start server
startApolloServer()
