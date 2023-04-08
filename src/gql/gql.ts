/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation CREATE_GAME_BOARD($user_id: Int) {\n    insert_boards(objects: [{ user_1_id: $user_id, turn: "x" }]) {\n      returning {\n        id\n      }\n    }\n  }\n':
    types.Create_Game_BoardDocument,
  '\n  mutation CREATE_PLAYER($name: String) {\n    insert_users(objects: { name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n':
    types.Create_PlayerDocument,
  '\n  mutation JOIN_SECOND_PLAYER($user_2_id: Int, $board_id: uuid!) {\n    update_boards(\n      where: {\n        id: { _eq: $board_id }\n        user_2_id: { _is_null: true }\n        user_1_id: { _neq: $user_2_id }\n      }\n      _set: { user_2_id: $user_2_id }\n    ) {\n      returning {\n        id\n        turn\n      }\n    }\n  }\n':
    types.Join_Second_PlayerDocument,
  '\n  mutation MAKE_MOVE($board_id: String!, $position: Int!, $user_id: Int!) {\n    makeMove(board_id: $board_id, position: $position, user_id: $user_id) {\n      success\n    }\n  }\n':
    types.Make_MoveDocument,
  '\n  query GET_BOARD_GAME($board_id: uuid!) {\n    boards_by_pk(id: $board_id) {\n      id\n      winner\n    }\n  }\n':
    types.Get_Board_GameDocument,
  '\n  subscription SUBSCRIBE_GAME($board_id: uuid!) {\n    boards: boards_by_pk(id: $board_id) {\n      id\n      turn\n      winner\n      winning_combo\n      moves(order_by: { id: desc }) {\n        id\n        position\n        user_id\n      }\n      user1 {\n        name\n        id\n      }\n      user2 {\n        name\n        id\n      }\n    }\n  }\n':
    types.Subscribe_GameDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CREATE_GAME_BOARD($user_id: Int) {\n    insert_boards(objects: [{ user_1_id: $user_id, turn: "x" }]) {\n      returning {\n        id\n      }\n    }\n  }\n'
): typeof documents['\n  mutation CREATE_GAME_BOARD($user_id: Int) {\n    insert_boards(objects: [{ user_1_id: $user_id, turn: "x" }]) {\n      returning {\n        id\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CREATE_PLAYER($name: String) {\n    insert_users(objects: { name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n'
): typeof documents['\n  mutation CREATE_PLAYER($name: String) {\n    insert_users(objects: { name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation JOIN_SECOND_PLAYER($user_2_id: Int, $board_id: uuid!) {\n    update_boards(\n      where: {\n        id: { _eq: $board_id }\n        user_2_id: { _is_null: true }\n        user_1_id: { _neq: $user_2_id }\n      }\n      _set: { user_2_id: $user_2_id }\n    ) {\n      returning {\n        id\n        turn\n      }\n    }\n  }\n'
): typeof documents['\n  mutation JOIN_SECOND_PLAYER($user_2_id: Int, $board_id: uuid!) {\n    update_boards(\n      where: {\n        id: { _eq: $board_id }\n        user_2_id: { _is_null: true }\n        user_1_id: { _neq: $user_2_id }\n      }\n      _set: { user_2_id: $user_2_id }\n    ) {\n      returning {\n        id\n        turn\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation MAKE_MOVE($board_id: String!, $position: Int!, $user_id: Int!) {\n    makeMove(board_id: $board_id, position: $position, user_id: $user_id) {\n      success\n    }\n  }\n'
): typeof documents['\n  mutation MAKE_MOVE($board_id: String!, $position: Int!, $user_id: Int!) {\n    makeMove(board_id: $board_id, position: $position, user_id: $user_id) {\n      success\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GET_BOARD_GAME($board_id: uuid!) {\n    boards_by_pk(id: $board_id) {\n      id\n      winner\n    }\n  }\n'
): typeof documents['\n  query GET_BOARD_GAME($board_id: uuid!) {\n    boards_by_pk(id: $board_id) {\n      id\n      winner\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  subscription SUBSCRIBE_GAME($board_id: uuid!) {\n    boards: boards_by_pk(id: $board_id) {\n      id\n      turn\n      winner\n      winning_combo\n      moves(order_by: { id: desc }) {\n        id\n        position\n        user_id\n      }\n      user1 {\n        name\n        id\n      }\n      user2 {\n        name\n        id\n      }\n    }\n  }\n'
): typeof documents['\n  subscription SUBSCRIBE_GAME($board_id: uuid!) {\n    boards: boards_by_pk(id: $board_id) {\n      id\n      turn\n      winner\n      winning_combo\n      moves(order_by: { id: desc }) {\n        id\n        position\n        user_id\n      }\n      user1 {\n        name\n        id\n      }\n      user2 {\n        name\n        id\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
