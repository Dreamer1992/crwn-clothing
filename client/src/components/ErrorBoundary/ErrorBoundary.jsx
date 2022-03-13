import { Component } from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorInfoText,
} from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  //   static getDerivedStateFromError(error) {
  //     // process the error
  //     return { error };
  //   }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    console.log(this.state);
    if (this.state.errorInfo) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
          {this.state.errorInfo && this.state.errorInfo.componentStack && (
            <ErrorInfoText>{this.state.errorInfo.componentStack}</ErrorInfoText>
          )}
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
