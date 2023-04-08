import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from '../components/App';
import apolloClient from '../api/apollo-client';
import theme from '../styles/theme';
import GlobalAppStyles from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from '../components/shared/CustomToast';
const Root = (props: AppProps) => {
  return (
    <>
      <CustomToast
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <CssBaseline />
          <GlobalAppStyles />
          <App {...props} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default Root;
