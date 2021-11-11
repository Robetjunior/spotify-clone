import React from 'react';
import './Footer.css';
import {
  PlayCircleFilledOutlined,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  VolumeDown,
  PlaylistPlay,
} from '@material-ui/icons';

import { Grid, Slider } from '@material-ui/core';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__albumLogo">
          <img src="https://upload.wikimedia.org/wikiped" alt="" />
          <div className="footer_songInfo">
            <h4>Yeah</h4>
            <p>...</p>
          </div>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleFilledOutlined fontSize="large" className="footer__green" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledy="continuos-slide" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
