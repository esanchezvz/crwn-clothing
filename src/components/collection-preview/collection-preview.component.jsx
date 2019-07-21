import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.scss';

const CollectionPreview = props => {
  const { title, items } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, i) => i < 4) // Only 4 items
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
