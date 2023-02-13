import React from 'react';
import classes from './Filter.module.scss';

function Filters({ myRepos, usersRepos }) {
  return (
    <div className={classes.filter}>
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

export default Filters;


// import React, { useState } from 'react';
// import classes from './Filter.module.scss';

// function Filters({ muRepos, usersRepos }) {
//   const [selectedLanguage, setSelectedLanguage] = useState('all');

//   const handleLanguageChange = (e) => {
//     setSelectedLanguage(e.target.value);
//   }

//   const filteredRepos = usersRepos.filter(repo => {
//     if (selectedLanguage === 'all') {
//       return true;
//     }
//     return repo.language === selectedLanguage;
//   });

//   return (
//     <div className={classes.filter}>
//       <div className={classes.type}>
//         <p>Language</p>
//         <select name="language" onChange={handleLanguageChange}>
//           <option value="all">All</option>
//           <option value="JavaScript">JavaScript</option>
//           <option value="SCSS">SCSS</option>
//           <option value="HTML">HTML</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
//     </div>
//   )
// }

// export default Filters;