import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

export default class Root {
  constructor(rootElement) {
    ReactDOM.render(
      <AppContainer>
        <App text="Hello World!"/>
      </AppContainer>,
      rootElement
    );

    if (module.hot) {
      module.hot.accept('containers/App', () => {
        const NextApp = require('containers/App').default;
        ReactDOM.render(
          <AppContainer>
             <NextApp text="Hello World!"/>
          </AppContainer>,
          rootElement
        );
      });
    }
  }
}
