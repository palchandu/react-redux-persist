import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import './index.css'
import { Provider } from 'react-redux'
/**Persist */
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './app/store';
let persistor = persistStore(store);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
   
  </>,
)
