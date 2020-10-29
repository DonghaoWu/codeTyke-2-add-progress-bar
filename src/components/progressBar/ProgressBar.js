import React from 'react';

import './Styles.scss';

const ProgressBar = (props) => {
    const { progress } = props;
    return (
        <div id='progress-bar-container'>
            <div id='progress-bar' style={{ width: `${progress}` }}>{progress}
            </div>
        </div>
    )
}

export default ProgressBar;