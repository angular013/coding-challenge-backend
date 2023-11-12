import { Answer } from '../../../prisma/generated/clientQuestionnaire';

const answerReference = {
    Answer: {
      __resolveReference: async (reference: any, ctx: any): Promise<Answer | null> => {
        const { uuid } = reference;

        const answer = await ctx.prisma.answer.findUnique({
          where: {
            uuid
            },
          include: {
            question: true,
            }
        });
        
       return answer;
    },
  },
};

export default answerReference;
