import { Question } from '@prisma/client';

const questionQueries = {
    Query: {
      getAllQuestions : async (parent: any, args: any, ctx: any): Promise<Question[]> => {
        return await ctx.prisma.question.findMany({
            include: {
                questiontype: true,
                page: true
            }
        });
      },
      getQuestion: async (parent: any, args: any, ctx: any): Promise<Question> => {
        return await ctx.prisma.question.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
              questiontype: true,
              page: true
            },
          });
      },
    },
  };
  
  export default questionQueries;