import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://tic-tac-toe.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': `${process.env.ADMIN_SECRET}`,
        },
      },
    },
  ],
  documents: 'src/**/*.{ts, tsx}',
  ignoreNoDocuments: true,
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
