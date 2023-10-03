import { Question } from "@prisma/client";

const questionMutations = {
  Mutation: {
    createQuestion: async (parent: any, args: any, ctx: any): Promise<Question> => {
        const createdQuestion =  await ctx.prisma.question.create({
            data: {
                question: args.input.question,
                pageId: args.input.pageId,
                questionTypeId: args.input.questionTypeId
            },
            include: {
              questiontype: true,
              page: true
            }
          });
        return createdQuestion;
    },
    updateQuestion: async (parent: any, args: any, ctx: any): Promise<Question> => {

        const dataToUpdate: {
          question?: string; 
          pageId?: string; 
          questionTypeId?: string; 
        } = {};
        
        if (args.input.question !== undefined) {
          dataToUpdate.question = args.input.question;
        }
        
        if (args.input.pageId !== undefined) {
          dataToUpdate.pageId = args.input.pageId;
        }

        if (args.input.questionTypeId !== undefined) {
          dataToUpdate.questionTypeId = args.input.questionTypeId;
        }

      const updatedQuestion = await ctx.prisma.question.update({
        where: {
          uuid : args.input.uuid
        },
        data: {
          question: dataToUpdate.question,
          pageId: dataToUpdate.pageId,
          questionTypeId: dataToUpdate.questionTypeId
        },
        include: {
          questiontype: true,
          page: true
        }
      });
      return updatedQuestion;
      
    },
    deleteQuestion: async (parent: any, args: any, ctx: any): Promise<Question> => {
      return await ctx.prisma.question.delete({
        where: {
          uuid: args.input.uuid,
        },
        include: {
          questiontype: true,
          page: true
        }
      });
    },
  },
};

export default questionMutations;