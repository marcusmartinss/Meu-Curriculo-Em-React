import React, { Fragment } from 'react';
import './styles.css';

import Language from './language';
import JavascriptImage from '../../assets/logo-javascript.png';
import CImage from '../../assets/logo-c.png';
import HTMLImage from '../../assets/logo-html.png';
import CSSImage from '../../assets/logo-css.png';

const Languages = () => {
    return (
        <Fragment>
            <p className='section-title'>
                Linguagens
            </p>
            <div className=''>
                <Language
                    langName='JavaScript'
                    langImgScr={JavascriptImage}
                    langImgAlt='JavaScript logo'
                />
                <Language
                    langName='C'
                    langImgScr={CImage}
                    langImgAlt='C logo'
                />
                <Language
                    langName='HTML'
                    langImgScr={HTMLImage}
                    langImgAlt='HTML logo'
                />
                <Language
                    langName='CSS'
                    langImgScr={CSSImage}
                    langImgAlt='CSS logo'
                />
            </div>
        </Fragment>
    );
}

export default Languages;