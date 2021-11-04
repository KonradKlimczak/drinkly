import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cocktail = {
  __typename?: 'Cocktail';
  author: User;
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  recipe: Recipe;
  score?: Maybe<Scalars['Float']>;
};

export enum Direction {
  Asc = 'asc',
  Desc = 'desc',
}

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: User;
  login: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAuthorCocktails: Array<Cocktail>;
  getCocktails: Array<Cocktail>;
  getIngredients: Array<Scalars['String']>;
};

export type QueryGetAuthorCocktailsArgs = {
  userId: Scalars['String'];
};

export type QueryGetCocktailsArgs = {
  ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortBy>;
  take?: Maybe<Scalars['Int']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  steps: Array<RecipeStep>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  amount: Scalars['Float'];
  ingredient: Scalars['String'];
  optional?: Maybe<Scalars['Boolean']>;
  unit?: Maybe<Scalars['String']>;
};

export type RecipeStep = {
  __typename?: 'RecipeStep';
  action: Scalars['String'];
  ingredients: Array<RecipeIngredient>;
};

export type SortBy = {
  direction: Direction;
  field: SortField;
};

export enum SortField {
  Name = 'name',
  Score = 'score',
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type CreateAccountMutation = {
  __typename?: 'Mutation';
  createAccount: {
    __typename?: 'User';
    id: string;
    username: string;
    email: string;
    avatar?: string | null | undefined;
  };
};

export type GetCocktailsQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortBy>;
}>;

export type GetCocktailsQuery = {
  __typename?: 'Query';
  getCocktails: Array<{
    __typename?: 'Cocktail';
    id: string;
    name: string;
    image: string;
    description: string;
    score?: number | null | undefined;
    author: { __typename?: 'User'; id: string; username: string; email: string; avatar?: string | null | undefined };
    recipe: {
      __typename?: 'Recipe';
      id: string;
      steps: Array<{
        __typename?: 'RecipeStep';
        action: string;
        ingredients: Array<{
          __typename?: 'RecipeIngredient';
          ingredient: string;
          amount: number;
          unit?: string | null | undefined;
          optional?: boolean | null | undefined;
        }>;
      }>;
    };
  }>;
};

export type GetIngredientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetIngredientsQuery = { __typename?: 'Query'; getIngredients: Array<string> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation'; login: string };

export const CreateAccountDocument = gql`
  mutation createAccount($username: String!, $email: String!, $password: String!) {
    createAccount(username: $username, email: $email, password: $password) {
      id
      username
      email
      avatar
    }
  }
`;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
}
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<
  CreateAccountMutation,
  CreateAccountMutationVariables
>;
export const GetCocktailsDocument = gql`
  query GetCocktails($name: String, $ingredients: [String], $skip: Int, $take: Int, $sortBy: SortBy) {
    getCocktails(name: $name, ingredients: $ingredients, skip: $skip, take: $take, sortBy: $sortBy) {
      id
      name
      image
      description
      author {
        id
        username
        email
        avatar
      }
      recipe {
        id
        steps {
          action
          ingredients {
            ingredient
            amount
            unit
            optional
          }
        }
      }
      score
    }
  }
`;

/**
 * __useGetCocktailsQuery__
 *
 * To run a query within a React component, call `useGetCocktailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCocktailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCocktailsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      ingredients: // value for 'ingredients'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetCocktailsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCocktailsQuery, GetCocktailsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCocktailsQuery, GetCocktailsQueryVariables>(GetCocktailsDocument, options);
}
export function useGetCocktailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCocktailsQuery, GetCocktailsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCocktailsQuery, GetCocktailsQueryVariables>(GetCocktailsDocument, options);
}
export type GetCocktailsQueryHookResult = ReturnType<typeof useGetCocktailsQuery>;
export type GetCocktailsLazyQueryHookResult = ReturnType<typeof useGetCocktailsLazyQuery>;
export type GetCocktailsQueryResult = Apollo.QueryResult<GetCocktailsQuery, GetCocktailsQueryVariables>;
export const GetIngredientsDocument = gql`
  query GetIngredients {
    getIngredients
  }
`;

/**
 * __useGetIngredientsQuery__
 *
 * To run a query within a React component, call `useGetIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIngredientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIngredientsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetIngredientsQuery, GetIngredientsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIngredientsQuery, GetIngredientsQueryVariables>(GetIngredientsDocument, options);
}
export function useGetIngredientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetIngredientsQuery, GetIngredientsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIngredientsQuery, GetIngredientsQueryVariables>(GetIngredientsDocument, options);
}
export type GetIngredientsQueryHookResult = ReturnType<typeof useGetIngredientsQuery>;
export type GetIngredientsLazyQueryHookResult = ReturnType<typeof useGetIngredientsLazyQuery>;
export type GetIngredientsQueryResult = Apollo.QueryResult<GetIngredientsQuery, GetIngredientsQueryVariables>;
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
