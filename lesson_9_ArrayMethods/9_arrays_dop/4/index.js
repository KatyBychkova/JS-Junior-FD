const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let newMatrix1 = [...matrix[0], ...matrix[1], ...matrix[2]];
console.log(newMatrix1);

let newMatrix2 = matrix[0].concat(matrix[1]).concat(matrix[2]);
console.log(newMatrix2);

let newMatrix3 = matrix.reduce((acc, curArray) => [...acc, ...curArray], []);   
console.log(newMatrix3);