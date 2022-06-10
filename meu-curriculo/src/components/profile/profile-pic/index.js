import React from 'react';
import './style.css';

const ProfilePic = (props) => {
    const { imageSrc, imageAlt } = props;

    return (
        <div id="profile-pic-position">
            <img id="profile-pic" src={imageSrc} alt={imageAlt} />
        </div>
    );
}

export default ProfilePic;