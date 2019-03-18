/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for ( let i = 0; i < preferences.length; i ++ ) {
    first = preferences[i];// first love
    second = preferences[first - 1];//second love
    third = preferences[second - 1];//third love

    if ( third == i + 1 ) {
      count += 1;
    }
  }
  return Math.floor(count / 3);
};
