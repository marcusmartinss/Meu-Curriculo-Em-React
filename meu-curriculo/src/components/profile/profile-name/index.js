import React from 'react';
import './style.css';

const ProfileName = (props) => {
    const { profileName } = props;

    return (
        <div id="profile-name-position">
            <span id="profile-name">
                {profileName}
            </span>
        </div>
    );
}

export default ProfileName;