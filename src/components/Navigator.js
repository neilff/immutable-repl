import React, { PropTypes } from 'react';

import Dropdown from './Dropdown';
import examples from '../utils/examples';

const Navigator = (props) => {
  const {
    exampleMenuVisible,
    isSplitView,
    onCodeChange,
    onToggleExampleMenu,
    onToggleSplitView,
  } = props;

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue white" style={ styles.base }>
        <div className="flex">
          <div className="flex-auto">
            <div className="h3 inline-block mr2">
              <a
                href="https://facebook.github.io/immutable-js"
                target="_blank"
                style={ styles.link }
                className="white">
                Immutable.js
              </a>
            </div>
            <a
              style={ styles.link }
              onClick={ onToggleExampleMenu }
              className="inline-block white p2">
              Examples <span style={ styles.caret }>▼</span>
              <Dropdown
                style={ styles.dropdown }
                isVisible={ exampleMenuVisible }
                className="border bg-white p2 black">
                {
                  examples.map(list => {
                    return (
                      <div>
                      <h5 className="mt1">{ list.title }</h5>
                        <ul className="mt1 mb2 list-reset">
                          {
                            list.examples.map((i, idx) => {
                              return (
                                <li
                                  className="blue ml2"
                                  style={ styles.link }
                                  onClick={ () => {
                                    onCodeChange(i);
                                    onToggleExampleMenu();
                                  } }>
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
              className="inline-block white p2">
              Documentation
            </a>
          </div>
          <div className="flex-end">
            <a
              href
              target="_blank"
              style={ styles.link }
              className="inline-block white p2"
              onClick={ (e) => {
                e.preventDefault();
                onToggleSplitView();
              } }>
              {
                isSplitView ?
                  'Vertical View' : 'Split View'
              }
            </a>
            <a
              style={ styles.link }
              target="_blank"
              href="https://github.com/neilff/immutable-repl"
              className="inline-block white p2">
              Source
            </a>
          </div>
        </div>
    </div>
  );
};

Navigator.displayName = 'Navigator';
Navigator.propTypes = {
  exampleMenuVisible: PropTypes.bool.isRequired,
  isSplitView: PropTypes.bool.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  onToggleExampleMenu: PropTypes.func.isRequired,
  onToggleSplitView: PropTypes.func.isRequired,
};

const styles = {
  base: {
    zIndex: 999,
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  dropdown: {
    top: '50px',
    cursor: 'initial',
  },
  caret: {
    position: 'relative',
    left: '10px',
    bottom: '2px',
    fontSize: '8px',
  },
};

export default Navigator;
