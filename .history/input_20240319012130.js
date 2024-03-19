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
  if (name.startsWith('_')) {
    name = name.substring(1);
  }
  if (name.startsWith('__')) {
    name = name.substring(2);
  }

  return name;
}
module.exports = filtername;
