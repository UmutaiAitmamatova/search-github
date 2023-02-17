import React from 'react';
import classes from './Filter.module.scss';

function Filters({ setActiveFilter }) {
  return (
    <div className={classes.filter}>
      <div className={classes.type}>
        <p>Language</p>
        <select onChange={(e) => setActiveFilter(e.target.value)} name="language">
          <option value="all">All</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="SCSS">SCSS</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
          <option value="C">C</option>
          <option value="Go">Go</option>
        </select>
      </div>
    </div>
  )
}
export default Filters;