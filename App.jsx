import React from 'react';
import { Provider } from 'react-redux';
import store from './src/context/Store';
import Crypto from './src/components/Crypto';

export default function App() {
  return (
    <Provider store={store}>
      <Crypto />
    </Provider>
  );
}
