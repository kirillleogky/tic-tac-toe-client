import { AppProps } from 'next/app';
import Head from 'next/head';
import { Box } from '@mui/material';

const App = (props: AppProps) => {
  const { Component, pageProps } = props || {};

  return (
    <>
      <Head>
        <title>Multiplayer Tic Tac Toe</title>
      </Head>
      <Box
        sx={{
          maxWidth: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Component {...pageProps} />
      </Box>
    </>
  );
};
export default App;
