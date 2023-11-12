import { Page } from '../../../prisma/generated/clientQuestionnaire';

const pageQueries = {
    Query: {
      getAllPages : async (parent: any, args: any, ctx: any): Promise<Page[]> => {
        return await ctx.prisma.page.findMany({
            include: {
                questionnaire: true,
            }
        });
      },
      getPage: async (parent: any, args: any, ctx: any): Promise<Page> => {
        return await ctx.prisma.page.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
                questionnaire: true,
            },
          });
      },
    },
  };
  
  export default pageQueries;