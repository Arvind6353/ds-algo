function findDuplicates(str) {
  const dupes = {};
  const op = [];

  for (let w of str.toLowerCase().split(" ")) {
    if (!dupes[w]) dupes[w] = 1;
    else dupes[w]++;
  }
  for (let key in dupes) {
    if (dupes.hasOwnProperty(key) && dupes[key] > 1) {
      op.push(key);
    }
  }
  return op;
}
