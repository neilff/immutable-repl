import React from 'react';
import { connect } from 'react-redux';
import { codeChange } from '../reducers/code';
import { toggleExampleMenu } from '../reducers/ui';

import Navigator from '../components/Navigator';
import CodeContainer from '../components/CodeContainer';
import CompiledCode from '../components/CompiledCode';

function mapStateToProps(state) {
  return {
    currentCode: state.code.get('q', ''),
    exampleMenuVisible: state.ui.get('exampleMenuVisible', false),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCodeChange: (val) => dispatch(codeChange(val)),
    onToggleExampleMenu: () => dispatch(toggleExampleMenu()),
  };
}

const App = ({ currentCode, onCodeChange, exampleMenuVisible, onToggleExampleMenu }) => {
  return (
    <main className="container mb4">
      <Navigator
        exampleMenuVisible={ exampleMenuVisible }
        onToggleExampleMenu={ onToggleExampleMenu }
        onCodeChange={ onCodeChange } />
      <div className="clearfix mt4">
        <div className="mt3 mb2 border rounded">
          <h4 className="m2">Input</h4>
          <CodeContainer currentValue={ currentCode } onChange={ onCodeChange } />
        </div>
        <div className="mt3 mb2 border rounded">
          <h4 className="m2">Output</h4>
          <CompiledCode codeString={ currentCode } />
        </div>
      </div>
    </main>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
