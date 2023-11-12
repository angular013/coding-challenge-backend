import { Questionnaire } from '../../../prisma/generated/clientQuestionnaire';

const questionnaireQueries = {
    Query: {
      getAllQuestionnaires : async (parent: any, args: any, ctx: any): Promise<Questionnaire[]> => {
        return await ctx.prisma.questionnaire.findMany({
          include: {
            pages: true,
          }
        });
      },
      getQuestionnaire: async (parent: any, args: any, ctx: any): Promise<Questionnaire> => {

        console.log("resolver getQuestionnaire called")
        return await ctx.prisma.questionnaire.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
              pages: true,
            }
          });
      },
    },
  };
  
  export default questionnaireQueries;