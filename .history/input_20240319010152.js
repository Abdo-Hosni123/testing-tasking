function filtername(name) {
  if (name === undefined) {
    name = 'unknown';
  }
  if (name.startswith(' ') || name.endswith(' ')) {
    name.trim();
  }
  return name;
}
module.exports = filtername;
