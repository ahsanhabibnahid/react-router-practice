import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import { useState } from 'react';
import User from './components/User'

function App() {
  const [familiar, setFamiliar] = useState(false)
  return (
    <Router>

      <div style={{textAlign: 'center'}}>
        <h1>Is Familiar : {familiar.toString()}</h1>
        <button onClick={() => setFamiliar(!familiar)}>Toggle Friend</button>
        <User familiar={familiar}></User>
      </div>

      <hr />
      <div>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/portfolio'>Portfolio</Link>
        </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
