// src/routes/game/index.tsx

import React from 'react';
import GameComponent from '~/game';
import './../../styles/styles.css'

function Game() {
  return (
    <div>
      <h2>Game Page</h2>
      {/* <div className='game-container'> */}
      <GameComponent></GameComponent>
      {/* </div> */}
    </div>
  );
}

export default Game;


