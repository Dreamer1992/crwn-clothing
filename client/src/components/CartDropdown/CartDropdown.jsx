import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../CartItem/CartItem';
import { Button } from '../UI';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
