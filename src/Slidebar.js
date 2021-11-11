import React from 'react';
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import './Slidebar.css';
import SlidebarOption from './SlidebarOption';
import { useStateValue } from './DataLayer';

function Slidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="slidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SlidebarOption Icon={Home} title="Home" />
      <SlidebarOption Icon={Search} title="Search" />
      <SlidebarOption Icon={LibraryMusic} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SlidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Slidebar;
