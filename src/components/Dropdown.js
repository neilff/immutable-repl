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
  /**
   * Children to render inside dropdown
   */
  children: PropTypes.node,
  /**
   * Classnames to be applied to the dropdown
   */
  className: PropTypes.string,
  /**
   * If the dropdown should display or not
   */
  isVisible: PropTypes.bool,
  /**
   * Styles to be applied to the dropdown
   */
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
