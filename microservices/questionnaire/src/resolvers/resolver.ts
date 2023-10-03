import { questionnaireQuery, questionnaireMutation, questionnaireReference } from './questionnaire';
import { pageQueries, pageMutations, pageReference } from './page';
import { questionTypeQueries, questionTypeMutations, questionTypeReference } from './questionType';
import { questionQueries, questionMutations, questionReference } from './question';
import { answerQueries, answerMutations, answerReference } from './answer';



import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper/resolverMap';

const resolvers: GraphQLResolverMap<unknown> = {
  Query: {
    getAllQuestionnaires: questionnaireQuery.Query.getAllQuestionnaires,
    getQuestionnaire: questionnaireQuery.Query.getQuestionnaire,

    getAllPages: pageQueries.Query.getAllPages,
    getPage: pageQueries.Query.getPage,

    getAllQuestionTypes: questionTypeQueries.Query.getAllQuestionTypes,
    getQuestionType: questionTypeQueries.Query.getQuestionType,

    getAllQuestions: questionQueries.Query.getAllQuestions,
    getQuestion: questionQueries.Query.getQuestion,

    getAllAnswers: answerQueries.Query.getAllAnswers,
    getAnswer: answerQueries.Query.getAnswer,
  },
  Mutation: {
    createQuestionnaire: questionnaireMutation.Mutation.createQuestionnaire,
    updateQuestionnaire: questionnaireMutation.Mutation.updateQuestionnaire,
    deleteQuestionnaire: questionnaireMutation.Mutation.deleteQuestionnaire,

    createPage: pageMutations.Mutation.createPage,
    updatePage: pageMutations.Mutation.updatePage,
    deletePage: pageMutations.Mutation.deletePage,

    createQuestionType: questionTypeMutations.Mutation.createQuestionType,
    updateQuestionType: questionTypeMutations.Mutation.updateQuestionType,
    deleteQuestionType: questionTypeMutations.Mutation.deleteQuestionType,

    createQuestion: questionMutations.Mutation.createQuestion,
    updateQuestion: questionMutations.Mutation.updateQuestion,
    deleteQuestion: questionMutations.Mutation.deleteQuestion,

    createAnswer: answerMutations.Mutation.createAnswer,
    updateAnswer: answerMutations.Mutation.updateAnswer,
    deleteAnswer: answerMutations.Mutation.deleteAnswer,
  },
  Questionnaire: {
    __resolveReference: questionnaireReference.Questionnaire.__resolveReference,
  },
  Page: {
    __resolveReference: pageReference.Page.__resolveReference,
  },
  QuestionType: {
    __resolveReference: questionTypeReference.QuestionType.__resolveReference,
  },
  Question: {
    __resolveReference: questionReference.Question.__resolveReference,
  },
  Answer: {
    __resolveReference: answerReference.Answer.__resolveReference,
  }
};

export default resolvers;
