import { fromJS } from 'immutable';

const list = fromJS({
  map: `const list = Immutable.List([1, 2, 3]);

list.map(i => i * 30);`,
  reduce: `const list = Immutable.List([1, 2, 3]);

list.reduce((acc, i, idx) => {
  return acc.set(idx, i * 10);
}, Immutable.Map());`,
  filter: `const list = Immutable.List([1, 2, 3]);

list.filter(i => i % 2);`,
});

export default {
  list,
};
