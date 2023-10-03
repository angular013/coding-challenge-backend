import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type Answer = {
  __typename?: 'Answer';
  created: Scalars['DateTime']['output'];
  question: Question;
  updated: Scalars['DateTime']['output'];
  uuid: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type CreateAnswerInput = {
  questionId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CreatePageInput = {
  pageLevel: Scalars['Int']['input'];
  questionnaireUUID: Scalars['ID']['input'];
};

export type CreateQuestionInput = {
  pageId: Scalars['String']['input'];
  question: Scalars['String']['input'];
  questionTypeId: Scalars['String']['input'];
};

export type CreateQuestionTypeInput = {
  name: Scalars['String']['input'];
};

export type CreateQuestionnaireInput = {
  name: Scalars['String']['input'];
};

export type DeleteAnswerInput = {
  uuid: Scalars['ID']['input'];
};

export type DeletePageInput = {
  uuid: Scalars['ID']['input'];
};

export type DeleteQuestionInput = {
  uuid: Scalars['ID']['input'];
};

export type DeleteQuestionTypeInput = {
  uuid: Scalars['ID']['input'];
};

export type DeleteQuestionnaireInput = {
  uuid: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer: Answer;
  createPage: Page;
  createQuestion: Question;
  createQuestionType: QuestionType;
  createQuestionnaire: Questionnaire;
  deleteAnswer: Answer;
  deletePage: Page;
  deleteQuestion: Question;
  deleteQuestionType: QuestionType;
  deleteQuestionnaire: Questionnaire;
  updateAnswer: Answer;
  updatePage: Page;
  updateQuestion: Question;
  updateQuestionType: QuestionType;
  updateQuestionnaire: Questionnaire;
};


export type MutationCreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationCreatePageArgs = {
  input: CreatePageInput;
};


export type MutationCreateQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationCreateQuestionTypeArgs = {
  input: CreateQuestionTypeInput;
};


export type MutationCreateQuestionnaireArgs = {
  input: CreateQuestionnaireInput;
};


export type MutationDeleteAnswerArgs = {
  input: DeleteAnswerInput;
};


export type MutationDeletePageArgs = {
  input: DeletePageInput;
};


export type MutationDeleteQuestionArgs = {
  input: DeleteQuestionInput;
};


export type MutationDeleteQuestionTypeArgs = {
  input: DeleteQuestionTypeInput;
};


export type MutationDeleteQuestionnaireArgs = {
  input: DeleteQuestionnaireInput;
};


export type MutationUpdateAnswerArgs = {
  input: UpdateAnswerInput;
};


export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};


export type MutationUpdateQuestionArgs = {
  input: UpdateQuestionInput;
};


export type MutationUpdateQuestionTypeArgs = {
  input: UpdateQuestionTypeInput;
};


export type MutationUpdateQuestionnaireArgs = {
  input: UpdateQuestionnaireInput;
};

export type Page = {
  __typename?: 'Page';
  created: Scalars['DateTime']['output'];
  pageLevel: Scalars['Int']['output'];
  questionnaire: Questionnaire;
  questions: Array<Maybe<Question>>;
  updated: Scalars['DateTime']['output'];
  uuid: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAnswers: Array<Answer>;
  getAllPages: Array<Page>;
  getAllQuestionTypes: Array<QuestionType>;
  getAllQuestionnaires: Array<Questionnaire>;
  getAllQuestions: Array<Question>;
  getAnswer: Answer;
  getPage: Page;
  getQuestion: Question;
  getQuestionType: QuestionType;
  getQuestionnaire: Questionnaire;
};


export type QueryGetAnswerArgs = {
  uuid: Scalars['ID']['input'];
};


export type QueryGetPageArgs = {
  uuid: Scalars['ID']['input'];
};


export type QueryGetQuestionArgs = {
  uuid: Scalars['ID']['input'];
};


export type QueryGetQuestionTypeArgs = {
  uuid: Scalars['ID']['input'];
};


export type QueryGetQuestionnaireArgs = {
  uuid: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Maybe<Answer>>;
  created: Scalars['DateTime']['output'];
  page: Page;
  question: Scalars['String']['output'];
  questiontype: QuestionType;
  updated: Scalars['DateTime']['output'];
  uuid: Scalars['ID']['output'];
};

export type QuestionType = {
  __typename?: 'QuestionType';
  created: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  questions?: Maybe<Array<Maybe<Question>>>;
  updated: Scalars['DateTime']['output'];
  uuid: Scalars['ID']['output'];
};

export type Questionnaire = {
  __typename?: 'Questionnaire';
  created: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  pages?: Maybe<Array<Maybe<Page>>>;
  updated: Scalars['DateTime']['output'];
  uuid: Scalars['ID']['output'];
};

export type UpdateAnswerInput = {
  questionId?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

export type UpdatePageInput = {
  pageLevel?: InputMaybe<Scalars['Int']['input']>;
  questionnaireUUID?: InputMaybe<Scalars['ID']['input']>;
  uuid: Scalars['ID']['input'];
};

export type UpdateQuestionInput = {
  pageId?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionTypeId?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['ID']['input'];
};

export type UpdateQuestionTypeInput = {
  name: Scalars['String']['input'];
  uuid: Scalars['ID']['input'];
};

export type UpdateQuestionnaireInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['ID']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Answer: ResolverTypeWrapper<Answer>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  CreateAnswerInput: CreateAnswerInput;
  CreatePageInput: CreatePageInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  CreateQuestionInput: CreateQuestionInput;
  CreateQuestionTypeInput: CreateQuestionTypeInput;
  CreateQuestionnaireInput: CreateQuestionnaireInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteAnswerInput: DeleteAnswerInput;
  DeletePageInput: DeletePageInput;
  DeleteQuestionInput: DeleteQuestionInput;
  DeleteQuestionTypeInput: DeleteQuestionTypeInput;
  DeleteQuestionnaireInput: DeleteQuestionnaireInput;
  Mutation: ResolverTypeWrapper<{}>;
  Page: ResolverTypeWrapper<Page>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionType: ResolverTypeWrapper<QuestionType>;
  Questionnaire: ResolverTypeWrapper<Questionnaire>;
  UpdateAnswerInput: UpdateAnswerInput;
  UpdatePageInput: UpdatePageInput;
  UpdateQuestionInput: UpdateQuestionInput;
  UpdateQuestionTypeInput: UpdateQuestionTypeInput;
  UpdateQuestionnaireInput: UpdateQuestionnaireInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Answer: Answer;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  CreateAnswerInput: CreateAnswerInput;
  CreatePageInput: CreatePageInput;
  Int: Scalars['Int']['output'];
  CreateQuestionInput: CreateQuestionInput;
  CreateQuestionTypeInput: CreateQuestionTypeInput;
  CreateQuestionnaireInput: CreateQuestionnaireInput;
  DateTime: Scalars['DateTime']['output'];
  DeleteAnswerInput: DeleteAnswerInput;
  DeletePageInput: DeletePageInput;
  DeleteQuestionInput: DeleteQuestionInput;
  DeleteQuestionTypeInput: DeleteQuestionTypeInput;
  DeleteQuestionnaireInput: DeleteQuestionnaireInput;
  Mutation: {};
  Page: Page;
  Query: {};
  Question: Question;
  QuestionType: QuestionType;
  Questionnaire: Questionnaire;
  UpdateAnswerInput: UpdateAnswerInput;
  UpdatePageInput: UpdatePageInput;
  UpdateQuestionInput: UpdateQuestionInput;
  UpdateQuestionTypeInput: UpdateQuestionTypeInput;
  UpdateQuestionnaireInput: UpdateQuestionnaireInput;
  Boolean: Scalars['Boolean']['output'];
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Answer']>, { __typename: 'Answer' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAnswer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationCreateAnswerArgs, 'input'>>;
  createPage?: Resolver<ResolversTypes['Page'], ParentType, ContextType, RequireFields<MutationCreatePageArgs, 'input'>>;
  createQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationCreateQuestionArgs, 'input'>>;
  createQuestionType?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationCreateQuestionTypeArgs, 'input'>>;
  createQuestionnaire?: Resolver<ResolversTypes['Questionnaire'], ParentType, ContextType, RequireFields<MutationCreateQuestionnaireArgs, 'input'>>;
  deleteAnswer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationDeleteAnswerArgs, 'input'>>;
  deletePage?: Resolver<ResolversTypes['Page'], ParentType, ContextType, RequireFields<MutationDeletePageArgs, 'input'>>;
  deleteQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationDeleteQuestionArgs, 'input'>>;
  deleteQuestionType?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationDeleteQuestionTypeArgs, 'input'>>;
  deleteQuestionnaire?: Resolver<ResolversTypes['Questionnaire'], ParentType, ContextType, RequireFields<MutationDeleteQuestionnaireArgs, 'input'>>;
  updateAnswer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationUpdateAnswerArgs, 'input'>>;
  updatePage?: Resolver<ResolversTypes['Page'], ParentType, ContextType, RequireFields<MutationUpdatePageArgs, 'input'>>;
  updateQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationUpdateQuestionArgs, 'input'>>;
  updateQuestionType?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationUpdateQuestionTypeArgs, 'input'>>;
  updateQuestionnaire?: Resolver<ResolversTypes['Questionnaire'], ParentType, ContextType, RequireFields<MutationUpdateQuestionnaireArgs, 'input'>>;
}>;

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Page']>, { __typename: 'Page' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  pageLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  questionnaire?: Resolver<ResolversTypes['Questionnaire'], ParentType, ContextType>;
  questions?: Resolver<Array<Maybe<ResolversTypes['Question']>>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllAnswers?: Resolver<Array<ResolversTypes['Answer']>, ParentType, ContextType>;
  getAllPages?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType>;
  getAllQuestionTypes?: Resolver<Array<ResolversTypes['QuestionType']>, ParentType, ContextType>;
  getAllQuestionnaires?: Resolver<Array<ResolversTypes['Questionnaire']>, ParentType, ContextType>;
  getAllQuestions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  getAnswer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<QueryGetAnswerArgs, 'uuid'>>;
  getPage?: Resolver<ResolversTypes['Page'], ParentType, ContextType, RequireFields<QueryGetPageArgs, 'uuid'>>;
  getQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<QueryGetQuestionArgs, 'uuid'>>;
  getQuestionType?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<QueryGetQuestionTypeArgs, 'uuid'>>;
  getQuestionnaire?: Resolver<ResolversTypes['Questionnaire'], ParentType, ContextType, RequireFields<QueryGetQuestionnaireArgs, 'uuid'>>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Question']>, { __typename: 'Question' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  answers?: Resolver<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questiontype?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionType'] = ResolversParentTypes['QuestionType']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['QuestionType']>, { __typename: 'QuestionType' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireResolvers<ContextType = any, ParentType extends ResolversParentTypes['Questionnaire'] = ResolversParentTypes['Questionnaire']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Questionnaire']>, { __typename: 'Questionnaire' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Answer?: AnswerResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  QuestionType?: QuestionTypeResolvers<ContextType>;
  Questionnaire?: QuestionnaireResolvers<ContextType>;
}>;

