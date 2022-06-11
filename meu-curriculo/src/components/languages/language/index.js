import React, {Fragment} from 'react';
import './styles.css'

const Language = (props) => {
    return (
        <Fragment>
            <span className='language-container'>
                <img className='lang-image' src={props.langImgScr} alt={props.langImgAlt} />
                <span className='lang-text'>{props.langName}</span>
            </span>
        </Fragment>
    );
}

export default Language;
