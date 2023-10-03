import { QuestionType } from "@prisma/client";

const questionTypeReference = {
    QuestionType: {
      __resolveReference: async (reference: any, ctx: any): Promise<QuestionType | null> => {
        const { uuid } = reference;

        const questionType = await ctx.prisma.questionType.findUnique({
          where: {
            uuid
            },
          include: {
            questions: true,
            }
        });
        
       return questionType;
    },
  },
};

export default questionTypeReference;
