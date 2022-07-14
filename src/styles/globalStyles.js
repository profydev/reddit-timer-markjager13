import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Bitter from './fonts/bitter-v28-latin-regular.woff';
import Bitter2 from './fonts/bitter-v28-latin-regular.woff2';
import Montserrat from './fonts/montserrat-v25-latin-regular.woff';
import Montserrat2 from './fonts/montserrat-v25-latin-regular.woff2';

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
        font-family: 'Bitter';
        src: local('Bitter'), local('Bitter'),
        url(${Bitter2}) format('woff2'),
        url(${Bitter}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat2}) format('woff2'),
        url(${Montserrat}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalStyle;
