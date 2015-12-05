import React, { Component, PropTypes } from 'react';
import Codemirror from 'react-codemirror';
import debounce from 'debounce';

require('react-codemirror/node_modules/codemirror/mode/javascript/javascript');

class CodeContainer extends Component {
  static propTypes = {
    currentValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const { currentValue, onChange } = this.props;

    return (
      <div className="border-top" style={ styles.base }>
        <Codemirror
          options={{
            lineNumbers: true,
            mode: 'javascript',
          }}
          className="block"
          value={ currentValue }
          onChange={ debounce(onChange, 300).bind(this) } />
      </div>
    );
  }

  updateCode(val) {
    const { onChange } = this.props;

    onChange(val);
  }
}

const styles = {
  base: {},
};

export default CodeContainer;
