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

export type AnswerInput = {
  answerId?: InputMaybe<Scalars['String']['input']>;
  answerSelected?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  pages: Array<PageInput>;
  questionnaireId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeleteUserInput = {
  uuid: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserInput: Array<UserInput>;
  deleteUserInput: UserInput;
  updateUserInput: Array<UserInput>;
};


export type MutationCreateUserInputArgs = {
  input: Array<CreateUserInput>;
};


export type MutationDeleteUserInputArgs = {
  input: DeleteUserInput;
};


export type MutationUpdateUserInputArgs = {
  input: Array<UpdateUserInput>;
};

export type PageInput = {
  pageId?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};

export type Query = {
  __typename?: 'Query';
  getAllUserInputs: Array<UserInput>;
  getAllUsers: Array<User>;
  getUser: User;
  getUserInput: UserInput;
};


export type QueryGetUserArgs = {
  uuid: Scalars['ID']['input'];
};


export type QueryGetUserInputArgs = {
  uuid: Scalars['ID']['input'];
};

export type QuestionInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerInput>>>;
  questionId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  pages: Array<PageInput>;
  questionnaireId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  password: Scalars['String']['output'];
  userInput: Array<Maybe<UserInput>>;
  username: Scalars['String']['output'];
  uuid: Scalars['ID']['output'];
};

export type UserInput = {
  __typename?: 'UserInput';
  answerId: Scalars['String']['output'];
  answerSelected: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  pageId: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionnaireId: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  user: User;
  uuid: Scalars['ID']['output'];
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
  AnswerInput: AnswerInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  CreateUserInput: CreateUserInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteUserInput: DeleteUserInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInput: PageInput;
  Query: ResolverTypeWrapper<{}>;
  QuestionInput: QuestionInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserInput: ResolverTypeWrapper<UserInput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AnswerInput: AnswerInput;
  String: Scalars['String']['output'];
  CreateUserInput: CreateUserInput;
  DateTime: Scalars['DateTime']['output'];
  DeleteUserInput: DeleteUserInput;
  ID: Scalars['ID']['output'];
  Mutation: {};
  PageInput: PageInput;
  Query: {};
  QuestionInput: QuestionInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserInput: UserInput;
  Boolean: Scalars['Boolean']['output'];
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUserInput?: Resolver<Array<ResolversTypes['UserInput']>, ParentType, ContextType, RequireFields<MutationCreateUserInputArgs, 'input'>>;
  deleteUserInput?: Resolver<ResolversTypes['UserInput'], ParentType, ContextType, RequireFields<MutationDeleteUserInputArgs, 'input'>>;
  updateUserInput?: Resolver<Array<ResolversTypes['UserInput']>, ParentType, ContextType, RequireFields<MutationUpdateUserInputArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllUserInputs?: Resolver<Array<ResolversTypes['UserInput']>, ParentType, ContextType>;
  getAllUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'uuid'>>;
  getUserInput?: Resolver<ResolversTypes['UserInput'], ParentType, ContextType, RequireFields<QueryGetUserInputArgs, 'uuid'>>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['User']>, { __typename: 'User' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userInput?: Resolver<Array<Maybe<ResolversTypes['UserInput']>>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInput'] = ResolversParentTypes['UserInput']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['UserInput']>, { __typename: 'UserInput' } & GraphQLRecursivePick<ParentType, {"uuid":true}>, ContextType>;
  answerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answerSelected?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  pageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questionnaireId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserInput?: UserInputResolvers<ContextType>;
}>;

