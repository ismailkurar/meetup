import React from 'react';
import PropTypes from 'prop-types';

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
    console.log(error) // eslint-disable-line
  };

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.logErrorToMyService(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error
      ? <div className="error-boundary">ERROR</div>
      : children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
