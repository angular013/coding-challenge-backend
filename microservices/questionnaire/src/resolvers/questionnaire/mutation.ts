import { Questionnaire } from '../../../prisma/generated/clientQuestionnaire';

const questionnaireMutations = {
  Mutation: {
    createQuestionnaire: async (parent: any, args: any, ctx: any): Promise<Questionnaire> => {
        const createdQuestionnaire =  await ctx.prisma.questionnaire.create({
            data: {
              name: args.input.name,
            },
          });
        return createdQuestionnaire;
    },
    updateQuestionnaire: async (parent: any, args: any, ctx: any): Promise<Questionnaire> => {

      const dataToUpdate: {
        name?: string;
      } = {};
      
      if (args.input.pageLevel !== undefined) {
        dataToUpdate.name = args.input.name;
      }

      const updatedQuestionnaire = await ctx.prisma.questionnaire.update({
        where: {
          uuid : args.input.uuid
        },
        data: {dataToUpdate},
      });
      return updatedQuestionnaire;
      
    },
    deleteQuestionnaire: async (parent: any, args: any, ctx: any): Promise<Questionnaire> => {
      return await ctx.prisma.questionnaire.delete({
        where: {
          uuid: args.input.uuid,
        },
      });
    },
  },
};

export default questionnaireMutations;