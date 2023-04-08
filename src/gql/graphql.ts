/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Result = {
  __typename?: 'Result';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "boards" */
export type Boards = {
  __typename?: 'boards';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  moves: Array<Moves>;
  /** An aggregate relationship */
  moves_aggregate: Moves_Aggregate;
  turn: Scalars['String'];
  /** An object relationship */
  user1: Users;
  /** An object relationship */
  user2?: Maybe<Users>;
  user_1_id: Scalars['Int'];
  user_2_id?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['String']>;
  winning_combo?: Maybe<Scalars['_text']>;
};

/** columns and relationships of "boards" */
export type BoardsMovesArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsMoves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: 'boards_aggregate';
  aggregate?: Maybe<Boards_Aggregate_Fields>;
  nodes: Array<Boards>;
};

export type Boards_Aggregate_Bool_Exp = {
  count?: InputMaybe<Boards_Aggregate_Bool_Exp_Count>;
};

export type Boards_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Boards_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: 'boards_aggregate_fields';
  avg?: Maybe<Boards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Boards_Max_Fields>;
  min?: Maybe<Boards_Min_Fields>;
  stddev?: Maybe<Boards_Stddev_Fields>;
  stddev_pop?: Maybe<Boards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boards_Stddev_Samp_Fields>;
  sum?: Maybe<Boards_Sum_Fields>;
  var_pop?: Maybe<Boards_Var_Pop_Fields>;
  var_samp?: Maybe<Boards_Var_Samp_Fields>;
  variance?: Maybe<Boards_Variance_Fields>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "boards" */
export type Boards_Aggregate_Order_By = {
  avg?: InputMaybe<Boards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Boards_Max_Order_By>;
  min?: InputMaybe<Boards_Min_Order_By>;
  stddev?: InputMaybe<Boards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Boards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Boards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Boards_Sum_Order_By>;
  var_pop?: InputMaybe<Boards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Boards_Var_Samp_Order_By>;
  variance?: InputMaybe<Boards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "boards" */
export type Boards_Arr_Rel_Insert_Input = {
  data: Array<Boards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** aggregate avg on columns */
export type Boards_Avg_Fields = {
  __typename?: 'boards_avg_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "boards" */
export type Boards_Avg_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: InputMaybe<Array<Boards_Bool_Exp>>;
  _not?: InputMaybe<Boards_Bool_Exp>;
  _or?: InputMaybe<Array<Boards_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  moves?: InputMaybe<Moves_Bool_Exp>;
  moves_aggregate?: InputMaybe<Moves_Aggregate_Bool_Exp>;
  turn?: InputMaybe<String_Comparison_Exp>;
  user1?: InputMaybe<Users_Bool_Exp>;
  user2?: InputMaybe<Users_Bool_Exp>;
  user_1_id?: InputMaybe<Int_Comparison_Exp>;
  user_2_id?: InputMaybe<Int_Comparison_Exp>;
  winner?: InputMaybe<String_Comparison_Exp>;
  winning_combo?: InputMaybe<_Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint on columns "id" */
  BoardsPkey = 'boards_pkey',
}

/** input type for incrementing numeric columns in table "boards" */
export type Boards_Inc_Input = {
  user_1_id?: InputMaybe<Scalars['Int']>;
  user_2_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  moves?: InputMaybe<Moves_Arr_Rel_Insert_Input>;
  turn?: InputMaybe<Scalars['String']>;
  user1?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user2?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_1_id?: InputMaybe<Scalars['Int']>;
  user_2_id?: InputMaybe<Scalars['Int']>;
  winner?: InputMaybe<Scalars['String']>;
  winning_combo?: InputMaybe<Scalars['_text']>;
};

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: 'boards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  turn?: Maybe<Scalars['String']>;
  user_1_id?: Maybe<Scalars['Int']>;
  user_2_id?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "boards" */
export type Boards_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  turn?: InputMaybe<Order_By>;
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: 'boards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  turn?: Maybe<Scalars['String']>;
  user_1_id?: Maybe<Scalars['Int']>;
  user_2_id?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "boards" */
export type Boards_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  turn?: InputMaybe<Order_By>;
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: 'boards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boards>;
};

/** input type for inserting object relation for remote table "boards" */
export type Boards_Obj_Rel_Insert_Input = {
  data: Boards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** on_conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint;
  update_columns?: Array<Boards_Update_Column>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

/** Ordering options when selecting data from "boards". */
export type Boards_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  moves_aggregate?: InputMaybe<Moves_Aggregate_Order_By>;
  turn?: InputMaybe<Order_By>;
  user1?: InputMaybe<Users_Order_By>;
  user2?: InputMaybe<Users_Order_By>;
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
  winning_combo?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boards */
export type Boards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Turn = 'turn',
  /** column name */
  User_1Id = 'user_1_id',
  /** column name */
  User_2Id = 'user_2_id',
  /** column name */
  Winner = 'winner',
  /** column name */
  WinningCombo = 'winning_combo',
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  turn?: InputMaybe<Scalars['String']>;
  user_1_id?: InputMaybe<Scalars['Int']>;
  user_2_id?: InputMaybe<Scalars['Int']>;
  winner?: InputMaybe<Scalars['String']>;
  winning_combo?: InputMaybe<Scalars['_text']>;
};

/** aggregate stddev on columns */
export type Boards_Stddev_Fields = {
  __typename?: 'boards_stddev_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "boards" */
export type Boards_Stddev_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Boards_Stddev_Pop_Fields = {
  __typename?: 'boards_stddev_pop_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "boards" */
export type Boards_Stddev_Pop_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Boards_Stddev_Samp_Fields = {
  __typename?: 'boards_stddev_samp_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "boards" */
export type Boards_Stddev_Samp_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "boards" */
export type Boards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Boards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Boards_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  turn?: InputMaybe<Scalars['String']>;
  user_1_id?: InputMaybe<Scalars['Int']>;
  user_2_id?: InputMaybe<Scalars['Int']>;
  winner?: InputMaybe<Scalars['String']>;
  winning_combo?: InputMaybe<Scalars['_text']>;
};

/** aggregate sum on columns */
export type Boards_Sum_Fields = {
  __typename?: 'boards_sum_fields';
  user_1_id?: Maybe<Scalars['Int']>;
  user_2_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "boards" */
export type Boards_Sum_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Turn = 'turn',
  /** column name */
  User_1Id = 'user_1_id',
  /** column name */
  User_2Id = 'user_2_id',
  /** column name */
  Winner = 'winner',
  /** column name */
  WinningCombo = 'winning_combo',
}

export type Boards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Boards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Boards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Boards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Boards_Var_Pop_Fields = {
  __typename?: 'boards_var_pop_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "boards" */
export type Boards_Var_Pop_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Boards_Var_Samp_Fields = {
  __typename?: 'boards_var_samp_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "boards" */
export type Boards_Var_Samp_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Boards_Variance_Fields = {
  __typename?: 'boards_variance_fields';
  user_1_id?: Maybe<Scalars['Float']>;
  user_2_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "boards" */
export type Boards_Variance_Order_By = {
  user_1_id?: InputMaybe<Order_By>;
  user_2_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "moves" */
export type Moves = {
  __typename?: 'moves';
  /** An object relationship */
  board: Boards;
  board_id: Scalars['uuid'];
  id: Scalars['Int'];
  position: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "moves" */
export type Moves_Aggregate = {
  __typename?: 'moves_aggregate';
  aggregate?: Maybe<Moves_Aggregate_Fields>;
  nodes: Array<Moves>;
};

export type Moves_Aggregate_Bool_Exp = {
  count?: InputMaybe<Moves_Aggregate_Bool_Exp_Count>;
};

export type Moves_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Moves_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Moves_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "moves" */
export type Moves_Aggregate_Fields = {
  __typename?: 'moves_aggregate_fields';
  avg?: Maybe<Moves_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Moves_Max_Fields>;
  min?: Maybe<Moves_Min_Fields>;
  stddev?: Maybe<Moves_Stddev_Fields>;
  stddev_pop?: Maybe<Moves_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Moves_Stddev_Samp_Fields>;
  sum?: Maybe<Moves_Sum_Fields>;
  var_pop?: Maybe<Moves_Var_Pop_Fields>;
  var_samp?: Maybe<Moves_Var_Samp_Fields>;
  variance?: Maybe<Moves_Variance_Fields>;
};

/** aggregate fields of "moves" */
export type Moves_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Moves_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "moves" */
export type Moves_Aggregate_Order_By = {
  avg?: InputMaybe<Moves_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Moves_Max_Order_By>;
  min?: InputMaybe<Moves_Min_Order_By>;
  stddev?: InputMaybe<Moves_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Moves_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Moves_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Moves_Sum_Order_By>;
  var_pop?: InputMaybe<Moves_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Moves_Var_Samp_Order_By>;
  variance?: InputMaybe<Moves_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "moves" */
export type Moves_Arr_Rel_Insert_Input = {
  data: Array<Moves_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Moves_On_Conflict>;
};

/** aggregate avg on columns */
export type Moves_Avg_Fields = {
  __typename?: 'moves_avg_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "moves" */
export type Moves_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "moves". All fields are combined with a logical 'AND'. */
export type Moves_Bool_Exp = {
  _and?: InputMaybe<Array<Moves_Bool_Exp>>;
  _not?: InputMaybe<Moves_Bool_Exp>;
  _or?: InputMaybe<Array<Moves_Bool_Exp>>;
  board?: InputMaybe<Boards_Bool_Exp>;
  board_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "moves" */
export enum Moves_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovesPkey = 'moves_pkey',
}

/** input type for incrementing numeric columns in table "moves" */
export type Moves_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "moves" */
export type Moves_Insert_Input = {
  board?: InputMaybe<Boards_Obj_Rel_Insert_Input>;
  board_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Moves_Max_Fields = {
  __typename?: 'moves_max_fields';
  board_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "moves" */
export type Moves_Max_Order_By = {
  board_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Moves_Min_Fields = {
  __typename?: 'moves_min_fields';
  board_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "moves" */
export type Moves_Min_Order_By = {
  board_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "moves" */
export type Moves_Mutation_Response = {
  __typename?: 'moves_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Moves>;
};

/** on_conflict condition type for table "moves" */
export type Moves_On_Conflict = {
  constraint: Moves_Constraint;
  update_columns?: Array<Moves_Update_Column>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

/** Ordering options when selecting data from "moves". */
export type Moves_Order_By = {
  board?: InputMaybe<Boards_Order_By>;
  board_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: moves */
export type Moves_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "moves" */
export enum Moves_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "moves" */
export type Moves_Set_Input = {
  board_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Moves_Stddev_Fields = {
  __typename?: 'moves_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "moves" */
export type Moves_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Moves_Stddev_Pop_Fields = {
  __typename?: 'moves_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "moves" */
export type Moves_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Moves_Stddev_Samp_Fields = {
  __typename?: 'moves_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "moves" */
export type Moves_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "moves" */
export type Moves_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Moves_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Moves_Stream_Cursor_Value_Input = {
  board_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Moves_Sum_Fields = {
  __typename?: 'moves_sum_fields';
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "moves" */
export type Moves_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "moves" */
export enum Moves_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  UserId = 'user_id',
}

export type Moves_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Moves_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Moves_Set_Input>;
  /** filter the rows which have to be updated */
  where: Moves_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Moves_Var_Pop_Fields = {
  __typename?: 'moves_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "moves" */
export type Moves_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Moves_Var_Samp_Fields = {
  __typename?: 'moves_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "moves" */
export type Moves_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Moves_Variance_Fields = {
  __typename?: 'moves_variance_fields';
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "moves" */
export type Moves_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>;
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>;
  /** delete data from the table: "moves" */
  delete_moves?: Maybe<Moves_Mutation_Response>;
  /** delete single row from the table: "moves" */
  delete_moves_by_pk?: Maybe<Moves>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>;
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>;
  /** insert data into the table: "moves" */
  insert_moves?: Maybe<Moves_Mutation_Response>;
  /** insert a single row into the table: "moves" */
  insert_moves_one?: Maybe<Moves>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  makeMove?: Maybe<Result>;
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>;
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>;
  /** update multiples rows of table: "boards" */
  update_boards_many?: Maybe<Array<Maybe<Boards_Mutation_Response>>>;
  /** update data of the table: "moves" */
  update_moves?: Maybe<Moves_Mutation_Response>;
  /** update single row of the table: "moves" */
  update_moves_by_pk?: Maybe<Moves>;
  /** update multiples rows of table: "moves" */
  update_moves_many?: Maybe<Array<Maybe<Moves_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_MovesArgs = {
  where: Moves_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Moves_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MovesArgs = {
  objects: Array<Moves_Insert_Input>;
  on_conflict?: InputMaybe<Moves_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Moves_OneArgs = {
  object: Moves_Insert_Input;
  on_conflict?: InputMaybe<Moves_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootMakeMoveArgs = {
  board_id: Scalars['String'];
  position?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** mutation root */
export type Mutation_RootUpdate_BoardsArgs = {
  _inc?: InputMaybe<Boards_Inc_Input>;
  _set?: InputMaybe<Boards_Set_Input>;
  where: Boards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _inc?: InputMaybe<Boards_Inc_Input>;
  _set?: InputMaybe<Boards_Set_Input>;
  pk_columns: Boards_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_ManyArgs = {
  updates: Array<Boards_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MovesArgs = {
  _inc?: InputMaybe<Moves_Inc_Input>;
  _set?: InputMaybe<Moves_Set_Input>;
  where: Moves_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Moves_By_PkArgs = {
  _inc?: InputMaybe<Moves_Inc_Input>;
  _set?: InputMaybe<Moves_Set_Input>;
  pk_columns: Moves_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Moves_ManyArgs = {
  updates: Array<Moves_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  /** An array relationship */
  moves: Array<Moves>;
  /** An aggregate relationship */
  moves_aggregate: Moves_Aggregate;
  /** fetch data from the table: "moves" using primary key columns */
  moves_by_pk?: Maybe<Moves>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Query_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Query_RootBoards_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootMovesArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

export type Query_RootMoves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

export type Query_RootMoves_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table in a streaming manner: "boards" */
  boards_stream: Array<Boards>;
  /** An array relationship */
  moves: Array<Moves>;
  /** An aggregate relationship */
  moves_aggregate: Moves_Aggregate;
  /** fetch data from the table: "moves" using primary key columns */
  moves_by_pk?: Maybe<Moves>;
  /** fetch data from the table in a streaming manner: "moves" */
  moves_stream: Array<Moves>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootBoards_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Boards_Stream_Cursor_Input>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Subscription_RootMovesArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

export type Subscription_RootMoves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

export type Subscription_RootMoves_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootMoves_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Moves_Stream_Cursor_Input>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  id: Scalars['Int'];
  last_seen: Scalars['timestamptz'];
  /** An array relationship */
  moves: Array<Moves>;
  /** An aggregate relationship */
  moves_aggregate: Moves_Aggregate;
  name: Scalars['String'];
};

/** columns and relationships of "users" */
export type UsersBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMovesArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMoves_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Moves_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Moves_Order_By>>;
  where?: InputMaybe<Moves_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  boards?: InputMaybe<Boards_Bool_Exp>;
  boards_aggregate?: InputMaybe<Boards_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  moves?: InputMaybe<Moves_Bool_Exp>;
  moves_aggregate?: InputMaybe<Moves_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "name" */
  UsersNameKey = 'users_name_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  boards?: InputMaybe<Boards_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  moves?: InputMaybe<Moves_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  boards_aggregate?: InputMaybe<Boards_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  moves_aggregate?: InputMaybe<Moves_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Create_Game_BoardMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['Int']>;
}>;

export type Create_Game_BoardMutation = {
  __typename?: 'mutation_root';
  insert_boards?: {
    __typename?: 'boards_mutation_response';
    returning: Array<{ __typename?: 'boards'; id: any }>;
  } | null;
};

export type Create_PlayerMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;

export type Create_PlayerMutation = {
  __typename?: 'mutation_root';
  insert_users?: {
    __typename?: 'users_mutation_response';
    returning: Array<{ __typename?: 'users'; id: number }>;
  } | null;
};

export type Join_Second_PlayerMutationVariables = Exact<{
  user_2_id?: InputMaybe<Scalars['Int']>;
  board_id: Scalars['uuid'];
}>;

export type Join_Second_PlayerMutation = {
  __typename?: 'mutation_root';
  update_boards?: {
    __typename?: 'boards_mutation_response';
    returning: Array<{ __typename?: 'boards'; id: any; turn: string }>;
  } | null;
};

export type Make_MoveMutationVariables = Exact<{
  board_id: Scalars['String'];
  position: Scalars['Int'];
  user_id: Scalars['Int'];
}>;

export type Make_MoveMutation = {
  __typename?: 'mutation_root';
  makeMove?: { __typename?: 'Result'; success?: boolean | null } | null;
};

export type Get_Board_GameQueryVariables = Exact<{
  board_id: Scalars['uuid'];
}>;

export type Get_Board_GameQuery = {
  __typename?: 'query_root';
  boards_by_pk?: {
    __typename?: 'boards';
    id: any;
    winner?: string | null;
  } | null;
};

export type Subscribe_GameSubscriptionVariables = Exact<{
  board_id: Scalars['uuid'];
}>;

export type Subscribe_GameSubscription = {
  __typename?: 'subscription_root';
  boards?: {
    __typename?: 'boards';
    id: any;
    turn: string;
    winner?: string | null;
    winning_combo?: any | null;
    moves: Array<{
      __typename?: 'moves';
      id: number;
      position: number;
      user_id: number;
    }>;
    user1: { __typename?: 'users'; name: string; id: number };
    user2?: { __typename?: 'users'; name: string; id: number } | null;
  } | null;
};

export const Create_Game_BoardDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_GAME_BOARD' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'user_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_boards' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'user_1_id' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'user_id' },
                          },
                        },
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'turn' },
                          value: {
                            kind: 'StringValue',
                            value: 'x',
                            block: false,
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returning' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Create_Game_BoardMutation,
  Create_Game_BoardMutationVariables
>;
export const Create_PlayerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_PLAYER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_users' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returning' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Create_PlayerMutation,
  Create_PlayerMutationVariables
>;
export const Join_Second_PlayerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JOIN_SECOND_PLAYER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'user_2_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'board_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_boards' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'board_id' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user_2_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_is_null' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user_1_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_neq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'user_2_id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user_2_id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'user_2_id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returning' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'turn' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Join_Second_PlayerMutation,
  Join_Second_PlayerMutationVariables
>;
export const Make_MoveDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MAKE_MOVE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'board_id' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'position' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'user_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'makeMove' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'board_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'board_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'position' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'position' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'user_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'user_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Make_MoveMutation, Make_MoveMutationVariables>;
export const Get_Board_GameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_BOARD_GAME' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'board_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'boards_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'board_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'winner' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_Board_GameQuery, Get_Board_GameQueryVariables>;
export const Subscribe_GameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'SUBSCRIBE_GAME' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'board_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'boards' },
            name: { kind: 'Name', value: 'boards_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'board_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'turn' } },
                { kind: 'Field', name: { kind: 'Name', value: 'winner' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'winning_combo' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'moves' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'id' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'position' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user_id' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user1' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user2' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Subscribe_GameSubscription,
  Subscribe_GameSubscriptionVariables
>;
