import React from 'react';
import Button from '../button/Button';
import ProgressBar from '../progressBar/ProgressBar'

import './Styles.scss';

const Intro = ({ gameStatus, setGameStatus }) => {
    console.log(gameStatus.message)
    if (gameStatus.message === 'Great Job! Play again.') {
        return (
            <div className="introContainer">
                <ProgressBar progress={'100%'} />
                <div className="introContainer--logo">
                    <img alt="logo" src="assets/logo.png" />
                </div>
                <div className="introContainer--message">
                    {gameStatus.message}
                </div>
                <Button label="start" handleSubmit={() => setGameStatus({ loadIntro: false })} />
            </div>
        )
    }
    else {
        return (
            <div className="introContainer">
                <div className="introContainer--logo">
                    <img alt="logo" src="assets/logo.png" />
                </div>
                <div className="introContainer--message">
                    {gameStatus.message}
                </div>
                <Button label="start" handleSubmit={() => setGameStatus({ loadIntro: false })} />
            </div>
        )
    }
}

export default Intro
