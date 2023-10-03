import { Answer } from "@prisma/client";

const answerMutations = {
  Mutation: {
    createAnswer: async (parent: any, args: any, ctx: any): Promise<Answer> => {
        const createdAnswer =  await ctx.prisma.answer.create({
            data: {
                value: args.input.value,
                questionId: args.input.questionId
            },
            include: {
                question: true,
            }
          });
        return createdAnswer;
    },
    updateAnswer: async (parent: any, args: any, ctx: any): Promise<Answer> => {

        const dataToUpdate: {
          value?: string; 
          questionId?: string; 
        } = {};
        
        if (args.input.value !== undefined) {
          dataToUpdate.value = args.input.value;
        }
        
        if (args.input.questionId !== undefined) {
          dataToUpdate.questionId = args.input.questionId;
        }

      const updatedAnswer = await ctx.prisma.answer.update({
        where: {
          uuid : args.input.uuid
        },
        data: {
          value: dataToUpdate.value,
          questionId: dataToUpdate.questionId
        },
        include: {
          question: true,
        }
      });
      return updatedAnswer;
      
    },
    deleteAnswer: async (parent: any, args: any, ctx: any): Promise<Answer> => {
      return await ctx.prisma.answer.delete({
        where: {
          uuid: args.input.uuid,
        },
        include: {
          question: true,
        }
      });
    },
  },
};

export default answerMutations;