import { Questionnaire } from "@prisma/client";

const questionnaireReference = {
  Questionnaire: {
      __resolveReference: async (reference: any, ctx: any): Promise<Questionnaire> => {
        console.log("resolver Questionnaire __resolveReference called")

        const { uuid } = reference;

        const questionnaire = await ctx.prisma.questionnaire.findUnique({
          where: {
            uuid : uuid
          },
          include: {
            pages: true,
          }
        });
        
       return questionnaire;
    },
  },
};

export default questionnaireReference;
