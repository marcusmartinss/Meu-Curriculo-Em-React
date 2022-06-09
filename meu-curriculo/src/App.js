import React, { Fragment } from 'react';
import './App.css';

import ProfilePicture from './components/profile-pic';
import ProfileName from './components/profile-name';
import ProfileBio from './components/profile-bio';

function App() {
  return (
    <Fragment>
      <header>
        
      </header>

      <div>
        <ProfilePicture
          imageSrc="https://avatars.githubusercontent.com/u/89209017?v=4"
          imageAlt="Foto de perfil do meu currículo"
        />
        <ProfileName profileName="Marcus Martins" />
      </div>
      <p>
        <ProfileBio
          profileBio =
            "Estudante de Engenharia de Software na Universidade Federal de Brasília (UnB), atualmente participando do processo Trainee da empresa júnior Orc'estra Gamificação."
        />
      </p>

      <footer>
        
      </footer>
    </Fragment>
  );
}

export default App;
