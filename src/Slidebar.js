import React from 'react';
import './Slidebar.css';
import SlidebarOption from './SlidebarOption';

function Slidebar() {
  return (
    <div className="sidebar">
      <img
        className="slidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SlidebarOption title="Home" />
      <SlidebarOption title="Search" />
      <SlidebarOption title="Your Library" />
    </div>
  );
}

export default Slidebar;
