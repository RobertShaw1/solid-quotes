//package dependicies
const React = require('react');
import 'semantic-ui-react';

//local dependicies
require('../index.css');

//Date Structure
const date = () => {
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dayOfWeek = new Date().getDay();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const year = new Date().getFullYear();

  return `${dayName[dayOfWeek]}, ${monthName[month]} ${day}, ${year}`
}

export default QOTD => (  
  <div className="ui text center aligned container home">
    <h1 className="ui center aligned qotd-header">Quote of the Day</h1>
    <h3 className="ui center aligned date-header">{date()}</h3>
    <p className="qotd">
      "Our deepest fear is not that we are inadequate.  Our deepest fear is that we are powerful beyond measure."
      <br />
      <br />
      <div className="attribution">-Marianne Williamson</div>
    </p>
  </div>
)
