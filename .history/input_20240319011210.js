function filtername(name) {
  if (name === undefined) {
    name = 'unknown';
  }
  if (name.startsWith(' ') || name.endsWith(' ')) {
    name = name.trim();
  }
  if (name.length > 10) {
    name = name.substring(0, 10);
  }
  return name;
}
module.exports = filtername;
