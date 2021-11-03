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

export type GetCocktailsQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;

export type GetCocktailsQuery = {
  __typename?: 'Query';
  getCocktails: Array<{
    __typename?: 'Cocktail';
    id: string;
    name: string;
    image: string;
    description: string;
    author: { __typename?: 'User'; username: string; email: string; avatar?: string | null | undefined };
    recipe: {
      __typename?: 'Recipe';
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

export const GetCocktailsDocument = gql`
  query GetCocktails($name: String, $ingredients: [String]) {
    getCocktails(name: $name, ingredients: $ingredients) {
      id
      name
      image
      description
      author {
        username
        email
        avatar
      }
      recipe {
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
