import { User } from '../../../prisma/generated/clientUserInput';

const userReference = {
  User: {
      __resolveReference: async (reference: any, ctx: any): Promise<User | null> => {
        const { uuid } = reference;

        const User = await ctx.prisma.user.findUnique({
          where: {
            uuid
            },
          include: {
            userInput: true,
            }
        });
        
       return User;
    },
  },
};

export default userReference;
