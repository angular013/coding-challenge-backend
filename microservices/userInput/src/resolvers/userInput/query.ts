import { UserInput } from '../../../prisma/generated/clientUserInput';

const userInputQueries = {
    Query: {
      getAllUserInputs : async (parent: any, args: any, ctx: any): Promise<UserInput[]> => {
        const allInputs =  await ctx.prisma.userInput.findMany({
          include: {
            user: true,
          }
        });

        return allInputs
      },
      getUserInput: async (parent: any, args: any, ctx: any): Promise<UserInput> => {

        return await ctx.prisma.userInput.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
              user: true,
            }
          });
      },
    },
  };
  
  export default userInputQueries;