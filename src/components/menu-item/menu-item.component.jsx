import React from 'react';

import './menu-item.scss';

const MenuItem = props => {
  const { title, imgUrl, linkUrl, size } = props;

  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-img'
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtile'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
