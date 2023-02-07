import React from 'react';
import classes from './Filter.module.scss';

function Filters() {
  return (
    <div className={classes.filter}>
      <input type="text" placeholder='Find a repository...' />
      <div className={classes.type}>
        <p>Language</p>
        <select name="language">
          <option value="all">All</option>
          <option value="1">JavaScript</option>
          <option value="2">SCSS</option>
          <option value="3">HTMI</option>
          <option value="3">Other</option>
        </select>
      </div>
    </div>
  )
}

export default Filters