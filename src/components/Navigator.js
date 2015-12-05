import React, { PropTypes } from 'react';

import Dropdown from './Dropdown';
import examples from '../utils/examples';

console.log(examples);

const Navigator = ({ onToggleExampleMenu, exampleMenuVisible, onCodeChange }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue white" style={ styles.base }>
      <div className="container">
        <div className="clearfix flex">
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
                List Functions
                <ul className="mt1 mb2">
                  {
                    examples.list.map((i, idx) => {
                      return (
                        <li onClick={ () => {
                          onCodeChange(i);
                          onToggleExampleMenu();
                        } }>{ idx }</li>
                      );
                    })
                  }
                </ul>
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
              style={ styles.link }
              target="_blank"
              href="https://github.com/neilff/immutable-repl"
              className="inline-block white p2">
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigator.displayName = 'Navigator';
Navigator.propTypes = {
  onToggleExampleMenu: PropTypes.func.isRequired,
  onCodeChange: PropTypes.func.isRequired,
};

const styles = {
  base: {
    zIndex: 999,
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  dropdown: {
    top: '50px',
  },
  caret: {
    position: 'relative',
    left: '10px',
    bottom: '2px',
    fontSize: '8px',
  },
};

export default Navigator;
