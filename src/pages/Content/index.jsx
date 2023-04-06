import React from 'react';
import { createRoot } from 'react-dom/client';
import createCache from '@emotion/cache';
import { CacheProvider, css } from '@emotion/react';
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

//import ThemeProvider from '../../theme';

import Content from './Content';
import './index.module.css';

const cssStyle = `
/* roboto-cyrillic-ext-400-normal*/
/* roboto-latin-300-normal*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: url('${chrome.runtime.getURL(
    'assets/fonts/roboto-latin-300-normal.woff2'
  )}')
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* roboto-latin-400-normal*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('${chrome.runtime.getURL(
    'assets/fonts/roboto-latin-400-normal.woff2'
  )}')
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* roboto-latin-500-normal*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url('${chrome.runtime.getURL(
    'assets/fonts/roboto-latin-500-normal.woff2'
  )}')
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* roboto-latin-700-normal*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url('${chrome.runtime.getURL(
    'assets/fonts/roboto-latin-700-normal.woff2'
  )}')
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

`;

/* [
  'assets/fonts/roboto-latin-300-normal.woff2',
  'assets/fonts/roboto-latin-400-normal.woff2',
  'assets/fonts/roboto-latin-500-normal.woff2',
  'assets/fonts/roboto-latin-700-normal.woff2',
].map((item) => {
  let linkElem = document.createElement('link');
  linkElem.setAttribute('rel', 'stylesheet');
  linkElem.setAttribute('href', chrome.runtime.getURL(item));
  //document.head.appendChild(linkElem);
  shadowContainer.appendChild(linkElem);
}); */
console.log('Content script works!ssfff, ok...fff.greate');
const contentApp = document.createElement('div');
contentApp.id = 'app-container-content';

document.querySelector('body').appendChild(contentApp);

export const container = document.querySelector('#app-container-content');
export const shadowContainer = container.attachShadow({ mode: 'open' });
export const emotionRoot = document.createElement('style');
export const shadowRootElement = document.createElement('div');
let style = document.createElement('style');

style.textContent = cssStyle;
//shadowContainer.appendChild(style);
document.head.appendChild(style);

shadowContainer.appendChild(emotionRoot);
shadowContainer.appendChild(shadowRootElement);

// Apply external styles to the shadow DOM

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
  },
});

const cache = createCache({
  key: 'css',
  prepend: true,
  container: emotionRoot,
});

createRoot(shadowRootElement).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <Content />
      </CacheProvider>
    </ThemeProvider>
  </StyledEngineProvider>
);

/* createRoot(shadowRootElement).render(
  <ThemeProvider>
    <Content />
  </ThemeProvider>
); */
