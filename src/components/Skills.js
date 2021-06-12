import React from 'react';

import './Skills.scss';

const Skills = () => {
  return (
    <ul className='skills__container'>
      <li>
        <i className='fab fa-js'></i>
      </li>
      <li>
        <img
          src='https://camo.githubusercontent.com/349b918c3c7a45f8271ae7812246d95bd1dc20b220e8543067ce78c3cdb79c57/68747470733a2f2f342e62702e626c6f6773706f742e636f6d2f2d583755506b4f516a5175512f5775484c55454d375344492f4141414141414141414f592f72584758534f66505032636b465f63534f433343356433425f426849674e637841434c63424741732f73313630302f6d6f6e676f646225324225323532383225323532392e706e67'
          alt='mongoDB'
          width='140px'
        />
      </li>
      <li>
        <i className='fab fa-react'></i>
      </li>
      <li>
        <i class='fab fa-node'></i>
      </li>
    </ul>
  );
};

export default Skills;
