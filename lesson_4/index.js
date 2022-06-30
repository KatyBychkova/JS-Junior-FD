//задание 1

const name = "Katya";
console.log(Number(name), String(name), Boolean(name));

const age = 36;
console.log(Number(age), String(age), Boolean(age));

const isMarried = true;
console.log(Number(isMarried), String(isMarried), Boolean(isMarried));

const bigAge = 36n;
console.log(Number(bigAge), String(bigAge), Boolean(bigAge));

const haveDog = null;
console.log(Number(haveDog), String(haveDog), Boolean(haveDog));

const x = undefined;
console.log(Number(undefined), String(x), Boolean(x));

const id = Symbol("id");
console.log(String(id), Boolean(id));

const info = {
    name: "Katya",
    age: 36,
    isMarried: true,
};
console.log(Number(info), String(info), Boolean(info));


// задание 3

console.log("console.log", String(console.log), typeof String(console.log));
console.log("console.log", Number(console.log), typeof Number(console.log));
console.log("console.log", Boolean(console.log), typeof Boolean(console.log));

console.log("{ name: 'Maxim' }", String({ name: 'Maxim' }), typeof String({ name: 'Maxim' }));
console.log("{ name: 'Maxim' }", Number({ name: 'Maxim' }), typeof Number({ name: 'Maxim' }));
console.log("{ name: 'Maxim' }", Boolean({ name: 'Maxim' }), typeof Boolean({ name: 'Maxim' }));

console.log("Symbol('key')", String(Symbol('key')), typeof String(Symbol('key')));
//console.log("Symbol('key')", Number(Symbol('key')), typeof Number(Symbol('key')));
console.log("Symbol('key')", Boolean(Symbol('key')), typeof Boolean(Symbol('key')));

console.log("Number", String(Number), typeof String(Number));
console.log("Number", Number(Number), typeof Number(Number));
console.log("Number", Boolean(Number), typeof Boolean(Number));

console.log("''", String(''), typeof String(''));
console.log("''", Number(''), typeof Number(''));
console.log("''", Boolean(''), typeof Boolean(''));

console.log("0", String(0), typeof String(0));
console.log("0", Number(0), typeof Number(0));
console.log("0", Boolean(0), typeof Boolean(0));

console.log("-10", String(-10), typeof String(-10));
console.log("-10", Number(-10), typeof Number(-10));
console.log("-10", Boolean(-10), typeof Boolean(-10));

console.log("'-105'", String('-105'), typeof String('-105'));
console.log("'-105'", Number('-105'), typeof Number('-105'));
console.log("'-105'", Boolean('-105'), typeof Boolean('-105'));

// задание 4

// 1
console.log(Number(' 1 2 3 4 5')); // 12345
// 2
console.log(Number('1234 5')); // 12345
// 3
console.log(Number('12345')); //12345
// 4
console.log(String(false)); // 'false'
// 5
console.log(Boolean(0000000)); // false
// 6
console.log(Boolean(0.0000001)); // true
// 7
console.log(String(undefined)); // undefined
// 8
console.log(Number('100f')); // NaN
// 9
console.log(Number('100')); // 100
// 10
console.log(Number('000001')); // 1



