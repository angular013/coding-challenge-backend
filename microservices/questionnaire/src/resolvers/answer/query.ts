import { Answer } from '@prisma/client';

const answerQueries = {
    Query: {
      getAllAnswers : async (parent: any, args: any, ctx: any): Promise<Answer[]> => {
        return await ctx.prisma.answer.findMany({
            include: {
              question: true,
            }
        });
      },
      getAnswer: async (parent: any, args: any, ctx: any): Promise<Answer> => {
        return await ctx.prisma.answer.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
                question: true,
            },
          });
      },
    },
  };
  
  export default answerQueries;