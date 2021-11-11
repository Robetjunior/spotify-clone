import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './Player.css';
import Slidebar from './Slidebar';

function Player({ spotify }) {
  console.log(spotify);
  return (
    <div className="player">
      <div className="player__body">
        <Slidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
