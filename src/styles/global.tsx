import GlobalStyles from '@mui/material/GlobalStyles';
import { inter } from './fonts';
const GlobalAppStyles = () => (
  <GlobalStyles
    styles={() => ({
      html: {
        scrollBehavior: 'smooth',
      },

      body: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 700,
        backgroundSize: 'cover',
        backgroundImage: 'url(/icons/bg.svg)',
      },
    })}
  />
);
export default GlobalAppStyles;
