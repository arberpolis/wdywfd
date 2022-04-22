import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './style.css';
import { store } from './store';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = document.querySelector<HTMLDivElement>('#app')!;

const root = createRoot(app);

const page = (
  <React.StrictMode>
    <Provider store={store}>
      <h1>Work in Progress</h1>
    </Provider>
  </React.StrictMode>
);

root.render(page);
