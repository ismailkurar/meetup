import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { error: true };
  }

  logErrorToMyService = (error) => {
    console.log(error)
  };

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.logErrorToMyService(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error
      ? <div className="error-text">Ups! Something went wrong</div>
      : children
  }
}

export default ErrorBoundary;
