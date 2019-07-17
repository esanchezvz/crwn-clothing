import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = props => {
  const { title, imageUrl, linkUrl, size, history, match } = props;

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-img'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtile'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
