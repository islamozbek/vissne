import React from 'react';
import PropTypes from 'prop-types';

import './Alert.scss';

const Alert = (props) => {
  const {
    kind,
    show,
    message,
    toggleAlert,
  } = props;

  if (!show) return null;

  return (
    <div className={`alert alert-${kind} site-alert alert-dismissible fade show`} role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={toggleAlert}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Alert.defaultProps = {
  show: false,
  kind: 'info',
  message: null,
};

Alert.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  toggleAlert: PropTypes.func.isRequired,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

export default Alert;
