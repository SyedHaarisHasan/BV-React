import React from 'react';
import './App.css';
import Routes from './routes';
import { Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes/>
      </Router>
    );
  }
}

export default App;
