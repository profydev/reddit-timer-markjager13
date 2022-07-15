import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import BitterRegular from '../../public/fonts/Bitter-Regular.woff';
import BitterRegular2 from '../../public/fonts/Bitter-Regular.woff2';
import MontserratRegular from '../../public/fonts/Montserrat-Regular.woff';
import MontserratRegular2 from '../../public/fonts/Montserrat-Regular.woff2';
import MontserratMedium from '../../public/fonts/Montserrat-Medium.woff';
import MontserratMedium2 from '../../public/fonts/Montserrat-Medium.woff2';
import MontserratSemiBold from '../../public/fonts/Montserrat-SemiBold.woff';
import MontserratSemiBold2 from '../../public/fonts/Montserrat-SemiBold.woff2';
import MontserratBold from '../../public/fonts/Montserrat-Bold.woff';
import MontserratBold2 from '../../public/fonts/Montserrat-Bold.woff2';

const GlobalStyle = createGlobalStyle`
    
    // reset CSS
    ${normalize}

    // global styles
    body {
        margin: 0;
        padding: 0;
        background: #ffffff;
    }

    // fonts
    @font-face {
        // BitterRegular
        font-family: 'BitterRegular';
        src: local('BitterRegular'), local('BitterRegular'),
        url(${BitterRegular2}) format('woff2'),
        url(${BitterRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
        // MontSerratRegular
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'), local('MontserratRegular'),
        url(${MontserratRegular2}) format('woff2'),
        url(${MontserratRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
        // MontSerratMedium
        font-family: 'MontserratMedium';
        src: local('MontserratMedium'), local('MontserratMedium'),
        url(${MontserratMedium2}) format('woff2'),
        url(${MontserratMedium}) format('woff');
        font-weight: 400;
        font-style: normal;
        // MontSerratSemiBold
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'), local('MontserratSemiBold'),
        url(${MontserratSemiBold2}) format('woff2'),
        url(${MontserratSemiBold}) format('woff');
        font-weight: 400;
        font-style: normal;
        // MontSerratBold
        font-family: 'MontserratBold';
        src: local('MontserratBold'), local('MontserratBold'),
        url(${MontserratBold2}) format('woff2'),
        url(${MontserratBold}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyle;
