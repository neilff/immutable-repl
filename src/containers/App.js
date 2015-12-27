import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { codeChange } from '../reducers/code';
import { toggleExampleMenu, toggleSplitView } from '../reducers/ui';

import Navigator from '../components/Navigator';
import CodeContainer from '../components/CodeContainer';
import CompiledCode from '../components/CompiledCode';

function mapStateToProps(state) {
  return {
    currentCode: state.code.get('q', ''),
    exampleMenuVisible: state.ui.get('exampleMenuVisible', false),
    isSplitView: state.ui.get('isSplitView', false),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCodeChange: (val) => dispatch(codeChange(val)),
    onToggleExampleMenu: () => dispatch(toggleExampleMenu()),
    onToggleSplitView: () => dispatch(toggleSplitView()),
  };
}

const App = (props) => {
  const {
    currentCode,
    onCodeChange,
    exampleMenuVisible,
    onToggleExampleMenu,
    onToggleSplitView,
    isSplitView,
  } = props;

  const containerClass = `${ isSplitView ? 'flex-auto m1' : 'clearfix mt3 mb2' } border rounded`;

  return (
    <main
      className={ `${ isSplitView ? 'flex' : 'container' } mb4` }>
      <Navigator
        exampleMenuVisible={ exampleMenuVisible }
        onToggleExampleMenu={ onToggleExampleMenu }
        onCodeChange={ onCodeChange }
        isSplitView={ isSplitView }
        onToggleSplitView={ onToggleSplitView } />
      <div className={ `${ isSplitView ? 'flex flex-auto' : 'clearfix' } mt4` }>
        <div className={ containerClass }>
          <h6 className="m1">Input</h6>
          <CodeContainer currentValue={ currentCode } onChange={ onCodeChange } />
        </div>
        <div className={ containerClass }>
          <h6 className="m1">Output</h6>
          <CompiledCode codeString={ currentCode } />
        </div>
      </div>
    </main>
  );
};

App.displayName = 'App';
App.propTypes = {
  currentCode: PropTypes.string.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  exampleMenuVisible: PropTypes.bool.isRequired,
  onToggleExampleMenu: PropTypes.func.isRequired,
  onToggleSplitView: PropTypes.func.isRequired,
  isSplitView: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
