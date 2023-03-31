import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {Citys} from './mocks/citys';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {offers}
        reviews = {reviews}
        citys={Citys}
      />
    </Provider>
  </React.StrictMode>,
);
