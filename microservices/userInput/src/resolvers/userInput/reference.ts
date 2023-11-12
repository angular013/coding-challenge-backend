import { UserInput } from '../../../prisma/generated/clientUserInput';

const userInputReference = {
  UserInput: {
      __resolveReference: async (reference: any, ctx: any): Promise<UserInput | null> => {
        const { uuid } = reference;

        const UserInput = await ctx.prisma.userInput.findUnique({
          where: {
            uuid
            },
          include: {
            user: true,
            }
        });
        
       return UserInput;
    },
  },
};

export default userInputReference;
