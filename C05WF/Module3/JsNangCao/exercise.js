const numbers = [1, 2, 3, 4, 5];
// Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
/*
function sumArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const sumArray = (numbers) => {
    return numbers.reduce((sum, num) => sum + num);
}

console.log(sumArray(numbers));
*/

// 2. Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và 
// trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
/*
function squareArray(numbers) {
    let squareArray = [];
    for(let i = 0; i < numbers.length; i++) {
        squareArray.push(numbers[i] ** 2)
    }
    return squareArray;
}

const squareArray = (numbers) => {
    return numbers.map(number => number ** 2)
}

console.log(squareArray(numbers));
*/

// 3. Viết một hàm arrow có tên là filterGreaterThan, 
// nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
/*
function filterGreaterThan(numbers, valueInteger) {
    let filterGreaterThan = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > valueInteger)
            filterGreaterThan.push(numbers[i])
    }
    return filterGreaterThan;
}

const filterGreaterThan = (numbers, valueInteger ) => {
    return numbers.filter(number => number > valueInteger)
}
console.log(filterGreaterThan(numbers,3));
*/

// 4. Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
/*
function maxInArray(numbers) {
    let max = numbers[0]
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max)
            max = numbers[i]
    }
    return max;
}

const maxInArray = (array) => Math.max(...array);
console.log(maxInArray(numbers));
*/

// 5. Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
/*
function avgArray(numbers) {
    let avg = 0
    let count = numbers.length
    let total = 0
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i]
        avg = total / count
    }
    return avg;
}

const avgArray = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num , 0)
    return sum / numbers.length
}
console.log(avgArray(numbers));
*/

// 6. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
// console.log(numbers.map((num) => num ** 2));

//7. Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
const stringsArray = ["apple", "banana", "cherry", "date"];
// console.log(stringsArray.map(str => str.length));

// 8. Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
// const objectsArray = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// console.log(objectsArray.map(obj => obj.name));

// 9. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
// console.log(numbers.map(num => (num % 2 == 0 ? "even" : "odd")));

// 10. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
// console.log(stringsArray.map(str => str.toUpperCase()));
