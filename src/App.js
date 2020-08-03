import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

const store = ConfigureStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
