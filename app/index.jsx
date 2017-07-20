//package dependicies
const React = require('react');
const ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route} from 'react-router-dom';

//local dependicies
import './index.css';
import QOTD from './components/Qotd.jsx';
import Categories from './components/Categories.jsx'
import Rankings from './components/Rankings.jsx'
import NavBar from './components/Nav.jsx';

const App = () => (
    <Router>
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={QOTD} />
        <Route path="/categories" component={Categories} />
        <Route path="/rankings" component={Rankings} />
        {/* <Route component={NoMatch}/> */}
      </div>
    </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
