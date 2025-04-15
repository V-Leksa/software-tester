function SortOnTwoArrays(arr) {
    let even = [];
    let odd = [];
    for (const num of arr) {
        if (typeof num !== 'number') {
            console.warn(`Элемент "${num}" не является числом`);
            continue;
        }
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return { even, odd };
}

const result = SortOnTwoArrays([0, '1', 2, 3, 4, 5]);
console.log('Чётные:', result.even); 
console.log('Нечётные:', result.odd); 

