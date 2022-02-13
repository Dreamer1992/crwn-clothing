import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../CartItem/CartItem';
import { Button } from '../UI';
import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
