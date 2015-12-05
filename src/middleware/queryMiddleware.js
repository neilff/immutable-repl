import { stringify } from 'query-string';
import { createHistory } from 'history';
import base64 from 'base-64';
import logThis from '../utils/logThis';

const history = createHistory();

import { CODE_UPDATE } from '../reducers/code';

export default function queryMiddleware() {
  return next => action => {
    if (action.type && action.type !== CODE_UPDATE) {
      return next(action);
    }

    const queryString = stringify({
      q: base64.encode(action.payload),
    });

    history.pushState(null, `?${ queryString }`);

    logThis('Updating Query', `\n${ queryString }`);

    return next(action);
  };
}

