import React from 'react';
import './style.css';

const ProfileBio = (props) => {
    const { profileBio } = props;

    return (
        <div id="profile-bio-position">
            <span id="profile-bio">
                {profileBio}
            </span>
        </div>
    );
}

export default ProfileBio;