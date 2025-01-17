import { PrismaClient } from '../prisma/generated/clientUserInput'
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";
import { prisma } from "./clients";

export interface Context {
	request: Request;
	response: Response;
	prisma: PrismaClient;
}

export async function createContext(
	request: ExpressContext
): Promise<Partial<Context>> {
	const context: Context = {
		...request,
		response: request.res,
		request: request.req,
		prisma: prisma,
	};
	
	return context
}
