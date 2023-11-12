import { Page } from '../../../prisma/generated/clientQuestionnaire';

const pageMutations = {
  Mutation: {
    createPage: async (parent: any, args: any, ctx: any): Promise<Page> => {
        const createdPage =  await ctx.prisma.page.create({
            data: {
                pageLevel: args.input.pageLevel,
                questionnaireId: args.input.questionnaireUUID
            },
            include: {
                questionnaire: true,
            }
          });
        return createdPage;
    },
    updatePage: async (parent: any, args: any, ctx: any): Promise<Page> => {

        const dataToUpdate: {
            pageLevel?: number; 
            questionnaireId?: string; 
        } = {};
        
        if (args.input.pageLevel !== undefined) {
        dataToUpdate.pageLevel = args.input.pageLevel;
        }
        
        if (args.input.questionnaireUUID !== undefined) {
        dataToUpdate.questionnaireId = args.input.questionnaireUUID;
        }

      const updatedPage = await ctx.prisma.page.update({
        where: {
          uuid : args.input.uuid
        },
        data: {
            pageLevel: dataToUpdate.pageLevel,
            questionnaireId: dataToUpdate.questionnaireId
        },
        include: {
            questionnaire: true,
        }
      });
      return updatedPage;
      
    },
    deletePage: async (parent: any, args: any, ctx: any): Promise<Page> => {
      return await ctx.prisma.page.delete({
        where: {
          uuid: args.input.uuid,
        },
        include: {
            questionnaire: true,
        }
      });
    },
  },
};

export default pageMutations;