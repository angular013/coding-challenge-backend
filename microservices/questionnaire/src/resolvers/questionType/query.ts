import { QuestionType } from '../../../prisma/generated/clientQuestionnaire';

const questionTypeQueries = {
    Query: {
      getAllQuestionTypes : async (parent: any, args: any, ctx: any): Promise<QuestionType[]> => {
        return await ctx.prisma.questionType.findMany({
            include: {
              questions: true,
            }
        });
      },
      getQuestionType: async (parent: any, args: any, ctx: any): Promise<QuestionType> => {
        return await ctx.prisma.questionType.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
              questions: true,
            },
          });
      },
    },
  };
  
  export default questionTypeQueries;