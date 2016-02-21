export default function logThis(message, state = '') {
  /* eslint-disable */
  console.log(
    `%c :: ${ message } :: `,
    'background: #111; color: #bada55; padding: 5px;',
    '\n',
    state,
  );
  /* eslint-enable */
}
