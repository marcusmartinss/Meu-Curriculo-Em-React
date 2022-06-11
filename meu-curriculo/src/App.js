import React, { Fragment } from 'react';
import './App.css';

import Profile from './components/profile';
import Languages from './components/languages';

function App() {
  return (
    <Fragment>
      <header>
        <span>
          Meu currículo
        </span>
        <span>
          <a href="https://github.com/marcusmartinsxx" target="_blank">GitHub</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/marcusmartinss/" target="_blank">LinkedIn</a>
        </span>
      </header>

      <main>
        <Profile />
        <Languages />
      </main>
    </Fragment>
  );
}

export default App;
