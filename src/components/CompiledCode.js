import React, { PropTypes } from 'react';
import stringify from 'json-stringify-pretty-compact';

const CompiledCode = ({ codeString }) => {
  let result = null;
  let error;

  try {
    /* eslint-disable */
    result = eval(global.Babel.transform(codeString, {
      presets: ['es2015', 'react', 'stage-0']
    }).code);

    result = result === 'use strict' ? '' : result;
    /* eslint-enable */
  } catch (ex) {
    error = ex.toString();
  }

  return (
    <pre className="p2 bg-lighten-4" style={ styles.base }>
      {
        result ? stringify(result) : <div className="red">{ error }</div>
      }
    </pre>
  );
};

CompiledCode.defaultName = 'CompiledCode';
CompiledCode.propTypes = {
  /**
   * The code to perform eval on
   */
  codeString: PropTypes.string,
};
CompiledCode.defaultProps = {
  codeString: '',
};

const styles = {
  base: {
    overflowY: 'auto',
    fontSize: '13px',
  },
};

export default CompiledCode;
