import React from 'react';
import './scss/App.scss';
import about from './views/about'
import home from './views/home'
import Navi from './components/navi'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navi />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about" component={about} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
