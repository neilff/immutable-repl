import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { codeChange } from '../reducers/code';

import SplitPane from 'react-split-pane';
import Pane from '../components/Pane';
import Navigator from './Navigator';
import CodeContainer from '../components/CodeContainer';
import CompiledCode from '../components/CompiledCode';

function mapStateToProps(state) {
  return {
    currentCode: state.code.get('q', ''),
    splitView: state.ui.get('splitView', false),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCodeChange: (val) => dispatch(codeChange(val)),
  };
}

const App = (props) => {
  const {
    currentCode,
    onCodeChange,
    splitView,
  } = props;

  return (
    <main className="absolute top-0 left-0 right-0 bottom-0 bg-white">
      <Navigator />
      <div
        className="fixed top-0 left-0 right-0 bottom-0"
        style={{ marginTop: '40px' }}>
        <SplitPane split={ splitView ? 'vertical' : 'horizontal' }>
          <Pane title="Input">
            <CodeContainer
              currentValue={ currentCode }
              onChange={ onCodeChange } />
          </Pane>
          <Pane title="Output">
            <CompiledCode codeString={ currentCode } />
          </Pane>
        </SplitPane>
      </div>
    </main>
  );
};

App.displayName = 'App';
App.propTypes = {
  currentCode: PropTypes.string.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  splitView: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
