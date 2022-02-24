import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
