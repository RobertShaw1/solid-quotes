// package dependicies
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// local dependicies
import './index.css';
import QOTD from './components/Qotd.jsx';
import Categories from './components/Categories/Categories.jsx'
import Rankings from './components/Rankings/Rankings.jsx'
import NavBar from './components/NavBar.jsx';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/rankings" component={Rankings} />
      <Route path="/categories" component={QOTD} />
      <Route exact path="/" component={Categories} />
      {/* <Route component={NoMatch}/> */}
    </div>
  </Router>
)

export default App;
