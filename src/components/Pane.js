import React, { PropTypes } from 'react';

const Pane = ({ children, style, title }) => {
  return (
    <div
      className="flex flex-auto flex-column bg-silver"
      style={{
        ...styles,
        ...style,
      }}>
      <div className="flex flex-end border-bottom black bg-lighten-4">
        <h6 className="m1 flex-auto">{ title }</h6>
      </div>
      <div className="relative flex flex-auto bg-white">
        { children }
      </div>
    </div>
  );
};

Pane.defaultName = 'Pane';
Pane.propTypes = {
  /**
   * Children to render inside the pane
   */
  children: PropTypes.node,
  /**
   * Styles to apply to the pane
   */
  style: PropTypes.object,
  /**
   * Title to display on the pane
   */
  title: PropTypes.string,
};
Pane.defaultProps = {
  style: {},
  title: '',
};

const styles = {
  overflow: 'hidden',
};

export default Pane;
