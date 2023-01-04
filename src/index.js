module.exports = function towelSort (matrix = []) {
  for (let i = 0; i< matrix.length; i++) {
    if (i%2 != 0) {
      matrix[i].reverse();
    }
  }
  let res = [].concat(...matrix)
  return res;

  /*
  let result = [];
  for (let i = 0; i< matrix.length; i++) {
    if (i%2 != 0) {
      matrix[i].reverse();
    }
      for (let j = 0; j < matrix[i].length; j++) {
        if (!isNaN(matrix[i][j])) {
          result.push(matrix[i][j]);
        } else {
          continue;
        }
      }
  }
  return result;
  */
}
