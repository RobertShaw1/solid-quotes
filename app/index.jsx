//package dependicies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//local dependicies
import './index.css';
import QOTD from './components/Qotd.jsx';
import Categories from './components/Categories/Categories.jsx'
import Rankings from './components/Rankings/Rankings.jsx'
import NavBar from './components/NavBar.jsx';

const App = () => (
    <Router>
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/rankings" component={QOTD} />
        <Route path="/categories" component={Categories} />
        <Route path="/" component={Rankings} />
        {/* <Route component={NoMatch}/> */}
      </div>
    </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
