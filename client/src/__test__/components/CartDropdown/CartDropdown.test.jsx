import { shallow } from 'enzyme';

import CartDropdown from '../../../components/CartDropdown/CartDropdown';
import CartItem from '../../../components/CartItem/CartItem';

import { Provider } from 'react-redux';

import { toggleCartHidden } from '../../../redux/cart/cartActions';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = { push: jest.fn() };
    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
