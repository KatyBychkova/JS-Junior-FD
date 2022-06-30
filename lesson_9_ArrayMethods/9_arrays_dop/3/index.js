let array = [];

for (let i = 0; i < 3; i++) {
    array[i] =[];
    for (let k = 1; k <= 5; k++) {
        array[i].push(k);
    }
}

console.log(array);