function filtername(name) {
  if (name === undefined) {
    name = 'unknown';
  }
  if (name.startsWith(' ') || name.endsWith(' ')) {
    name = name.trim();
  }
  return name;
}
module.exports = filtername;
