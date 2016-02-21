import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import examples from '../utils/examples';

import * as uiActions from '../reducers/ui';
import * as codeActions from '../reducers/code';

import Dropdown from '../components/Dropdown';

function mapStateToProps(state) {
  return {
    exampleVisible: state.ui.get('exampleVisible'),
    settingsVisible: state.ui.get('settingsVisible'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...uiActions,
    ...codeActions,
  }, dispatch);
}

const Navigator = (props) => {
  const {
    toggleVisbility,
    codeChange,
    exampleVisible,
    settingsVisible,
  } = props;

  return (
    <div
      style={ styles.base }
      className="p1 fixed top-0 left-0 right-0 z4 bg-blue white flex">
        <div className="flex-auto">
          <div className="inline-block mr3">
            <a
              href="https://facebook.github.io/immutable-js"
              target="_blank"
              className="white"
              style={{
                ...styles.link,
                ...styles.brand,
              }}>
              Immutable.js
            </a>
          </div>
          <a
            style={ styles.link }
            onClick={ () => toggleVisbility('exampleVisible') }
            className="inline-block white mr3">
            Examples <span style={ styles.caret }>▼</span>
            <Dropdown
              style={ styles.dropdown }
              isVisible={ exampleVisible }
              className="border bg-white black p1">
              {
                examples.map((list, index) => {
                  return (
                    <div key={ index }>
                      <h5 className="mt1">{ list.title }</h5>
                      <ul className="mt1 mb2 list-reset">
                        {
                          list.examples.map((i, idx) => {
                            return (
                              <li
                                key={ idx }
                                className="blue ml2"
                                style={ styles.link }
                                onClick={() => {
                                  toggleVisbility('exampleVisible');
                                  codeChange(i);
                                }}>
                                { idx }
                              </li>
                            );
                          })
                        }
                      </ul>
                    </div>
                  );
                })
              }
            </Dropdown>
          </a>
          <a
            href="https://facebook.github.io/immutable-js/docs/#/"
            target="_blank"
            style={ styles.link }
            className="inline-block white mr2">
            Documentation
          </a>
          <a
            href="https://github.com/neilff/immutable-repl"
            target="_blank"
            style={ styles.link }
            className="inline-block white">
            Source
          </a>
        </div>
        <div className="flex-end">
          <div
            style={ styles.link }
            onClick={ () => toggleVisbility('settingsVisible') }
            className="inline-block white mr2">
            Settings <span style={ styles.caret }>▼</span>
            <Dropdown
              style={{
                ...styles.dropdown,
                ...{ right: '1rem' },
              }}
              isVisible={ settingsVisible }
              className="border bg-white black p1">
              <div>
                <h5 className="mt1">Visual</h5>
                <ul className="mt1 mb2 list-reset">
                  <li
                    className="blue ml2"
                    style={ styles.link }
                    onClick={(e) => {
                      e.preventDefault();
                      toggleVisbility('splitView');
                      toggleVisbility('settingsVisible');
                    }}>
                    Toggle View
                  </li>
                </ul>
              </div>
            </Dropdown>
          </div>
        </div>
    </div>
  );
};

Navigator.displayName = 'Navigator';
Navigator.propTypes = {
  codeChange: PropTypes.func,
  toggleVisbility: PropTypes.func,
  exampleVisible: PropTypes.bool,
  settingsVisible: PropTypes.bool,
};
Navigator.defaultProps = {
  codeChange: () => {},
  toggleVisbility: () => {},
  exampleVisible: false,
  settingsVisible: false,
};

const styles = {
  base: {
    fontFamily: 'Work Sans',
    height: '40px',
    fontWeight: 300,
    zIndex: 999,
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: 14,
  },
  brand: {
    fontWeight: 500,
    fontSize: 16,
  },
  dropdown: {
    top: '35px',
    cursor: 'initial',
  },
  caret: {
    position: 'relative',
    left: '10px',
    bottom: '2px',
    fontSize: '6px',
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
