import React from 'react';
import './App.css';
import Main from './Components/Main';
import {Provider} from 'react-redux';
import Store from './storeConfig';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Main/>
      </Provider>
      
    </div>
  );
}

export default App;
