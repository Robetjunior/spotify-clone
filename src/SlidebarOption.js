import React from 'react';
import './SlidebarOption.css';

function SlidebarOption({ title, icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
}

export default SlidebarOption;
