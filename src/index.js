
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if(matrix && matrix.length) {
      return matrix.map((a, b) => b%2!==0? a.reverse() : a).flat()
    }
   return [];
}

