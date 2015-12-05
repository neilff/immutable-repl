import React from 'react';
import stringify from 'json-stringify-pretty-compact';

const CompiledCode = ({ codeString }) => {
  let result = null;
  let error;

  try {
    /* eslint-disable */
    result = eval(codeString);
    /* eslint-enable */
  } catch (ex) {
    error = ex.toString();
  }

  return (
    <pre className="border-top p2" style={ styles.base }>
      {
        result ? stringify(result) : <div className="red">{ error }</div>
      }
    </pre>
  );
};

const styles = {
  base: {
    minHeight: 300,
  },
};

export default CompiledCode;
