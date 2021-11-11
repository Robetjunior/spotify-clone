import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './Player.css';
import Slidebar from './Slidebar';

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Slidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
