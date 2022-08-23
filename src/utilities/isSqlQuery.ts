export default (literal: string, ignorePattern?: string): boolean => {
  if (!literal) {
    return false;
  }

  return (-1 != literal.indexOf('--sql'))
};
