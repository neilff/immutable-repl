import React, { Component, PropTypes } from 'react';
import Codemirror from 'react-codemirror';
import debounce from 'debounce';

require('react-codemirror/node_modules/codemirror/mode/javascript/javascript');

class CodeContainer extends Component {
  componentDidMount() {
    const _onResize = this._onResize.bind(this);

    window.addEventListener('resize', debounce(_onResize, 16), false);
  }

  componentWillUnmount() {
    const _onResize = this._onResize;

    window.removeEventListener('resize', debounce(_onResize, 16), false);
  }

  _onResize() {
    this.refs.cm.getCodeMirror().refresh();
  }

  render() {
    const { currentValue, onChange } = this.props;

    return (
      <div
        className="flex flex-auto"
        style={ styles.container }>
        <Codemirror
          ref="cm"
          options={{
            lineNumbers: true,
            viewportMargin: Infinity,
            mode: {
              name: 'javascript',
              statementIndent: 2,
            },
            indentUnit: 2,
            tabSize: 2,
          }}
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

CodeContainer.propTypes = {
  /**
   * The current value of the code container
   */
  currentValue: PropTypes.string,
  /**
   * The function to perform when the code container value changes
   */
  onChange: PropTypes.func,
};
CodeContainer.defaultProps = {
  currentValue: '',
  onChange: () => {},
};

const styles = {
  codeMirror: {
    height: 800,
  },
  container: {
    overflowY: 'auto',
  },
};

export default CodeContainer;
