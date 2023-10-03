import { Question } from "@prisma/client";

const questionReference = {
    Question: {
      __resolveReference: async (reference: any, ctx: any): Promise<Question | null> => {
        const { uuid } = reference;

        const question = await ctx.prisma.question.findUnique({
          where: {
            uuid
          },
          include: {
            questiontype: true,
            page: true
          }
        });
        
       return question;
    },
  },
};

export default questionReference;
