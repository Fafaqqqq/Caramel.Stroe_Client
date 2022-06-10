import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import UserStore from './store/UserStore'
import ClothesStore from './store/ClothesStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
        user: new UserStore(),
        clothes: new ClothesStore()
    }}>
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
  </Context.Provider>
);
