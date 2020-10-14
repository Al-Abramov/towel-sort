
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if(!matrix){
        return [];
    }
return matrix.map((arr, i) => (i % 2 === 1) ? arr.reverse() : arr).flat();
}

