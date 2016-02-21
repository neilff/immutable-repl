import { fromJS } from 'immutable';

const listMap = `const list = Immutable.List([1, 2, 3]);

list.map(i => i * 30);`;

const listFilter = `const list = Immutable.List([1, 2, 3]);

list.filter(i => i % 2);`;

const listReduce = `const list = Immutable.List([1, 2, 3]);

list.reduce((acc, i, idx) => {
  return acc.set(idx, i * 10);
}, Immutable.Map());`;

const listFunctions = fromJS({
  map: listMap,
  filter: listFilter,
  reduce: listReduce,
});

const mapMap = `const map = Immutable.Map({ a: 0, b: 1, c: 2 });

map.map(i => i * 30);`;

const mapFilter = `const map = Immutable.Map({ a: 0, b: 1, c: 2 });

map.filter(i => i % 2);`;

const mapReduce = `const map = Immutable.Map({ a: 10, b: 20, c: 30 });

map.reduce((acc, i) => acc + i, 0);`;

const mapFunctions = fromJS({
  map: mapMap,
  filter: mapFilter,
  reduce: mapReduce,
});

export default [
  {
    title: 'List Functions',
    examples: listFunctions,
  },
  {
    title: 'Map Functions',
    examples: mapFunctions,
  },
];
