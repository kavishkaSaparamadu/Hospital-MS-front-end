import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from react-dom
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "../src/pages/context/AuthContext";
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your components with Provider and pass the Redux store */}
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);



