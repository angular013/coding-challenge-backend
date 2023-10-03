import { QuestionType } from "@prisma/client";

const questionTypeMutations = {
  Mutation: {
    createQuestionType: async (parent: any, args: any, ctx: any): Promise<QuestionType> => {
        const createdQuestionType =  await ctx.prisma.questionType.create({
            data: {
              name: args.input.name,
            },
            include: {
              questions: true,
            }
          });
        return createdQuestionType;
    },
    updateQuestionType: async (parent: any, args: any, ctx: any): Promise<QuestionType> => {

      const updatedQuestionType = await ctx.prisma.questionType.update({
        where: {
          uuid : args.input.uuid
        },
        data: {
          name: args.input.name,
        },
        include: {
          questions: true,
        }
      });
      return updatedQuestionType;
      
    },
    deleteQuestionType: async (parent: any, args: any, ctx: any): Promise<QuestionType> => {
      return await ctx.prisma.questionType.delete({
        where: {
          uuid: args.input.uuid,
        },
        include: {
          questions: true,
        }
      });
    },
  },
};

export default questionTypeMutations;