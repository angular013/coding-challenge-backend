import { UserInput } from '../../../prisma/generated/clientUserInput';
import {calculateRecommendations} from '../../axiosApiCalls'

const userInputMutations = {
  Mutation: {
    createUserInput: async (parent: any, args: any, ctx: any): Promise<UserInput[]> => {
      const userInputList:UserInput[] = [];

      const existingUserInput = await ctx.prisma.userInput.findFirst({
        where: {
          questionnaireId: args.input[0].questionnaireId,
          userId: args.input[0].userId,
        },
      });

      if (!existingUserInput) {
        for (const pageInput of args.input[0].pages) {
          for (const questionInput of pageInput.questions) {
            for (const answerInput of questionInput.answers) {
              const createdUserInput: UserInput = await ctx.prisma.userInput.create({
                data: {
                  questionnaireId: args.input[0].questionnaireId,
                  userId: args.input[0].userId,
                  pageId: pageInput.pageId,
                  questionId: questionInput.questionId,
                  answerId: answerInput.answerId,
                  answerSelected: answerInput.answerSelected
                },
                include: {
                  user: true,
                }
              });
            
              userInputList.push(createdUserInput);
            }
          }
        }

        const recommendationsResponse = await calculateRecommendations(userInputList)
        console.log(recommendationsResponse.data)
      }
      else{
        console.log('Record with the specified questionnaireId and userId already exists.');
      }

      return userInputList;
 
    },
    updateUserInput: async (parent: any, args: any, ctx: any): Promise<UserInput[]> => {

        const userInputList: UserInput[] = [];

        for (const pageInput of args.input[0].pages) {
          for (const questionInput of pageInput.questions) {
            for (const answerInput of questionInput.answers) {
              const updatedUserInput = await ctx.prisma.userInput.update({
                where: {
                  questionnaire_user_answer: { 
                    questionnaireId: args.input[0].questionnaireId,
                    userId: args.input[0].userId,
                    answerId: answerInput.answerId
                }
                }, 
                data: {
                  answerSelected: answerInput.answerSelected
                },
                include: {
                  user: true,
                }
              });
              userInputList.push(updatedUserInput);
            }
          }
        }

        const recommendationsResponse = await calculateRecommendations(userInputList)
        console.log(recommendationsResponse.data)
    
        return userInputList;
      
    },
    deleteUserInput: async (parent: any, args: any, ctx: any): Promise<UserInput> => {
      return await ctx.prisma.userInput.delete({
        where: {
          uuid: args.input.uuid,
        },
        include: {
          user: true,
        }
      });
    },
  },
};

export default userInputMutations;