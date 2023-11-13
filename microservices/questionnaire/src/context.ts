import { PrismaClient } from '../prisma/generated/clientQuestionnaire';
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";
import { prisma } from "./clients";
import { GraphQLError } from 'graphql';

export interface Context {
	request: Request;
	response: Response;
	prisma: PrismaClient;
}

export async function createContext(request: ExpressContext): Promise<Partial<Context>> {

	const token = request.req.headers.authorization || '';

	if (token !== "Bearer adminTokenPassword") {
		console.error('User is not authenticated');
		throw new GraphQLError('User is not authenticated', {
			extensions: {
			  code: 'UNAUTHENTICATED',
			  http: { status: 401 },
			},
		});
	}


	const context: Context = {
		...request,
		response: request.res,
		request: request.req,
		prisma: prisma,
	};
	
	return context
}
