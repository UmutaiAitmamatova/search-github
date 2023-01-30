import React from 'react';
import classes from './Filter.module.scss';

function Filters() {
  return (
    <div className={classes.filter}>
      <input type="text" placeholder='Find a repository...' />

      <div className={classes.type}>
        <p>Type</p>
        <select name="type">
          <option value="all">All</option>
          <option value="1">Public</option>
          <option value="2">Private</option>
          <option value="3">Sources</option>
          <option value="4">Forcs</option>
          <option value="5">Archived</option>
          <option value="6">Mirrors</option>
          <option value="7">Templates</option>
        </select>
      </div>

      <div className={classes.type}>
        <p>Language</p>
        <select name="language">
          <option value="all">All</option>
          <option value="1">JavaScript</option>
          <option value="2">SCSS</option>
          <option value="3">HTMI</option>
        </select>
      </div>

      <div className={classes.type}>
        <p>Sort</p>
        <select name="language">
          {/* <option value="all">All</option> */}
          <option value="1">Last ubdated</option>
          <option value="2">Name</option>
          <option value="3">Sort</option>
        </select>
      </div>
    </div>
  )
}

export default Filters