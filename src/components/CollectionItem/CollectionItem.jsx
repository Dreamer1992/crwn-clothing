import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';
import { Button } from '../UI';
import './CollectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>

      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
