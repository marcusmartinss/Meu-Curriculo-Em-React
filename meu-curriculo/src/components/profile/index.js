import React, { Fragment } from 'react';

import ProfilePicture from './profile-pic';
import ProfileName from './profile-name';
import ProfileBio from './profile-bio';

function Profile() {
    return (
        <Fragment>
            <div>
                <ProfilePicture
                    imageSrc="https://avatars.githubusercontent.com/u/89209017?v=4"
                    imageAlt="Foto de perfil do meu currículo"
                />
                <ProfileName profileName="Marcus Martins" />
            </div>
            <ProfileBio
                profileBio =
                "Estudante de Engenharia de Software na Universidade de Brasília (UnB), atualmente participando do processo Trainee da empresa júnior Orc'estra Gamificação."
            />
        </Fragment>
    );
}

export default Profile;