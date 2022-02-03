import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_DATA from './shopData';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collecions: SHOP_DATA,
    };
  }

  render() {
    const { collecions } = this.state;

    return (
      <div className="shop-page">
        {collecions.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
