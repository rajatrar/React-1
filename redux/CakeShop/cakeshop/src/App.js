import React from 'react';
import CakeContainer from './components/CakeContainer';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
     <CakeContainer/>
    </div>

    </Provider>
   
  );
}

export default App;
