import React from 'react';
import './scss/App.scss';
import about from './views/about'
import home from './views/home'
import masterpieces from './views/masterpieces'
import contact from './views/contact.js'
import './components/fontAwesome/index'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about" component={about} />
            <Route path="/masterpieces" component={masterpieces} />
            <Route path="/contact" component={contact} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
