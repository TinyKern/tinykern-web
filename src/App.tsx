import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './static/css/app.min.css';
import Home from './components/home';
import Navbar from './components/navbar';
import TinyKernel from './components/tinykernel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tinykernel" component={TinyKernel} />
          <Route exact path="/tinykernel/readme" component={() => 
            <h1>Redirecting to {window.location.href = 'https://github.com/TinyKern/TinyKernel/blob/master/README.md'}</h1>
          }>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
