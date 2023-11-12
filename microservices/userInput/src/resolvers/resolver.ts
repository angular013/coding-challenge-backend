import { userInputQueries, userInputMutations, userInputReference } from './userInput';
import { userQueries, userReference } from './user';


import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper/resolverMap';

const resolvers: GraphQLResolverMap<unknown> = {
  Query: {
    getAllUserInputs: userInputQueries.Query.getAllUserInputs,
    getUserInput: userInputQueries.Query.getUserInput,

    getAllUsers: userQueries.Query.getAllUsers,
    getUser: userQueries.Query.getUser,
  },
  Mutation: {
    createUserInput: userInputMutations.Mutation.createUserInput,
    updateUserInput: userInputMutations.Mutation.updateUserInput,
    deleteUserInput: userInputMutations.Mutation.deleteUserInput,
  },
  UserInput: {
    __resolveReference: userInputReference.UserInput.__resolveReference,
  },
  User: {
    __resolveReference: userReference.User.__resolveReference,
  }
};

export default resolvers;
