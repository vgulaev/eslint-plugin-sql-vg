import format from './rules/format';
import noUnsafeQuery from './rules/noUnsafeQuery';

const rules = {
  format,
  'no-unsafe-query': noUnsafeQuery,
};

const rulesConfig = {
  format: 0,
  'no-unsafe-query': 0,
}

export {
  rules,
  rulesConfig
};
