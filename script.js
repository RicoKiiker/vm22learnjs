let array = [1, 2, true, 1.2, 'hello'];
console.log(array);
console.log(array[4]);

array[3] = 96;
console.log(array);
array.push('new value');
console.log(array);
array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(array);
console.log(array[1][2]);
array = [[[[[1]]]]]
console.log(array);
console.log(array[0][0][0][0][0]);

let object = {
name: 'Rico',
age: 17,
cats: ['Rei', 'Miu']
};
console.log(object);
console.log(object.name);