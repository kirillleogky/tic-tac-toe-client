import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="theme-color" content="#4285f4" />
          <meta name="description" content="Multiplayer game - Tic Tac Toe" />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
