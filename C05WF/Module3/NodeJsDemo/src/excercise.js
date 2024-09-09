// 1.Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
/*
const colors = ['red', 'blue', 'green'];
const [firstColor, secondColor, thirdColor] = colors
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

*/

// 2.Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
/*
const person = {
    name: "Nhu",
    age: 20
}

const {name, age} = person

console.log(name);
console.log(age);
*/

// 3.Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1,...arr2]

console.log(mergedArray);
*/
// 4.Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
/*
const originalArray = [10, 20, 30, 40];
const copiedArray = [...originalArray]
console.log(originalArray);
*/
// 5.Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
/*
const arr = [1,2,3]
const newArr = [...arr,4]
console.log(newArr)
*/

// 6.Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
/*
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = {...obj1,...obj2}
console.log(mergedObj)
*/

// 7.Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
/*
const person = {
    name: 'John Doe',
    age: 30,
    gender: 'male'
}
const updatedPerson = {...person, country: "Vietnam"}
console.log(updatedPerson);
*/

// 8.Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers);
*/

// 9.Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
/*
const strings = ['apple', 'banana', 'kiwi', 'strawberry', 'grape'];
const lengthThreshold = 5;
const longStrings = strings.filter(string => string.length > lengthThreshold)
console.log(longStrings);
*/

// 10.Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
/*
const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 42 },
    { name: 'David', age: 22 }
];
const adults = people.filter(person => person.age > 30)
console.log(adults);
*/
// 11.Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
/*
const isPrime = num => {
    if (num <= 1) return false; // Số nguyên tố phải lớn hơn 1
    if (num === 2) return true;  // 2 là số nguyên tố
    if (num % 2 === 0) return false; // Số chẵn khác 2 không phải là số nguyên tố

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // Nếu chia hết cho i thì không phải số nguyên tố
    }
    return true;
};
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primeNumbers = numbers.filter(number => isPrime(number))
console.log(primeNumbers);
*/

// 12.Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
/*
const containsNumber = str => /\d/.test(str);
const strings = ['apple', 'banana123', 'grape', 'fruit2024', 'orange'];
const filteredStrings = strings.filter(str => !containsNumber(str))
console.log(filteredStrings);
*/

// 13.Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.
/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
console.log(sum)
*/

// 14.Sử dụng reduce để tính tích của các số trong một mảng số nguyên.
/*
const numbers = [1, 2, 3, 4, 5];
const product  = numbers.reduce((accumulator,currentValue) => accumulator * currentValue, 1)
console.log(product)
*/

// 15.Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.
/*
const numbers = [1, 2, 3, 4, 5];
const maxNumber = numbers.reduce((max, currentValue) => currentValue > max ? currentValue : max,  numbers[0])
console.log(maxNumber);
*/

// 16.Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
/*
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countOccurrences = array.reduce((accumulator, currentValue) => {
    if(!accumulator[currentValue]) {
        accumulator[currentValue] = 1
    } else 
        accumulator[currentValue] ++
    return accumulator;
}, {})

console.log(countOccurrences);
*/

// 17.Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
/*
const items = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 }
];

const total = items.reduce((accumulator, currentItem) =>  accumulator + currentItem.value, 0)
console.log(total);
*/





