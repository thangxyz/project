import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import reducer from './context/reducer';
import { initialState } from './context/initinalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      {/* khai báo reducer */}
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
   
    </Router>
    
  </React.StrictMode>
);



