import React, { PropTypes } from 'react';

const Dropdown = ({ isVisible, children, style, className }) => {
  return (
    <div
      onClick={ (e) => e.stopPropagation() }
      className={ `absolute left-align ${ className }` }
      style={{
        ...styles.base,
        ...isVisible ? styles.visible : styles.hidden,
        ...style,
      }}>
      { children }
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  style: PropTypes.object,
};
Dropdown.defaultProps = {
  className: '',
  isVisible: false,
  style: {},
};

const styles = {
  base: {
    minWidth: '180px',
    zIndex: 10,
  },
  hidden: {
    visibility: 'hidden',
    opacity: '0',
  },
  visible: {
    visibility: 'visible',
    opacity: '1',
  },
};

export default Dropdown;
