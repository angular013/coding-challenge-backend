import { User } from '../../../prisma/generated/clientUserInput';

const userQueries = {
    Query: {
      getAllUsers : async (parent: any, args: any, ctx: any): Promise<User[]> => {
        return await ctx.prisma.user.findMany({
          include: {
            userInput: true,
          }
        });
      },
      getUser: async (parent: any, args: any, ctx: any): Promise<User> => {

        return await ctx.prisma.user.findUnique({
            where: {
              uuid: args.uuid,
            },
            include: {
                userInput: true,
            }
          });
      },
    },
  };
  
  export default userQueries;