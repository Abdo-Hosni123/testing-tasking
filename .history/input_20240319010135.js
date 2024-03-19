function filtername(name) {
  if (name === undefined) {
    name = 'unknown';
  }
  if (name.startswith(' ') || name.endswith(' ')) {
    name = name.trim();
  }
  return name;
}
module.exports = filtername;
