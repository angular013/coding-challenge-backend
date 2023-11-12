import { Page } from '../../../prisma/generated/clientQuestionnaire';

const pageReference = {
    Page: {
      __resolveReference: async (reference: any, ctx: any): Promise<Page | null> => {
        const { uuid } = reference;

        const page = await ctx.prisma.page.findUnique({
          where: {
            uuid
            },
          include: {
            questionnaire: true,
            }
        });
        
       return page;
    },
  },
};

export default pageReference;
