/*
let colors = ["Red", "Green", "Blue"];
let [firstColor, secondColor, thirdColor] = colors;
console.log("firstColor", firstColor);
console.log("secondColor", secondColor);

// 2.Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.

let person = {
    name: "Phuc",
    age: 22
}

let {name, age} = person;
console.log("name", name);
console.log("age", age);

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [16, 17, 18, 19, 20]

let newArr = [...arr1, ...arr2]
console.log(newArr);

let originalArr = ['hello', 'world']
let copyArray = [...originalArr]

console.log(copyArray);
*/


// let arr = [1, 2, 3, 5];
// let newArr = [...arr, 4];
// console.log("arr", newArr);



/*
Quy tắc đặt tên biến:
- Tiếng Anh (K nhớ thì translate)
- camelCase (Example: nameProduct, infoCustomer,...)
- Danh từ
- với hằng số (biến const): đặt theo quy tắc SNAKE_CASE (Example: MINUTES_IN_HOURS);

Quy tắc đặt tên hàm:
- Động từ

Quy tắc đặt tên file:
- camelCase, company-demo.js
*/

// Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
// Số nguyên tố: CHỈ có 2 ước và chính nó (>= 2)
/*
let arrayNumber = [1, 4, 5, 10, 100, 17];
let newArray = arrayNumber.filter((item) => (isPrime(item)));
function isPrime(number) {
    let count = 0;
    for(let i = 1; i <= number; i++) {
        if(number % i == 0) {
            count++;
        }
    }
    if(count == 2) return true;
    return false;
}
console.log("newArray", newArray);
*/


// Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
// let name = "Linh";
// console.log("Ký tự 0: ", name[0]);
// console.log("Ký tự 1: ", name[1]);
// console.log("Độ dài chuỗi: ", name.length)

// let arrString = ["linh1704", "nhan", "hoangc05", "meomeo"];
// let newArr = arrString.filter((item) => {
//     // item = "linh1704";
//     for (let i = 0; i < item.length; i++) {
//         let char = +item[i]; // NaN (Not A Number) '5' => 5
//         let isNumber = !isNaN(char); // isNaN (Kiểm tra xem một giá trị nhận vào(number) có phải NaN hay không, có => đó là chuỗi, nếu false => đó là số)
//         if(isNumber) return false;
//     }
//     return true;
// })
// console.log("newArr", newArr)

// Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
/*
let obj = {
    count: 1,
    count2: 2
}

// console.log(obj.count); 
let field = "count2";
console.log(obj[field]);
*/

let names = ["Linh", "Kiên", "Linh", "Phúc", "Kiên"];
let arrReduce = names.reduce(
    (prev, item) => { // item = "Linh"
        if (prev[item]) { // prev[item] ~ prev.Linh = 1 ~ true
            prev[item] = prev[item] + 1; // prev.Linh = 1 + 1 = 2
        } else {
            prev[item] = 1; 
        }
        return prev; //  { Linh: 2, Kiên: 2 }
    }, 
    {}
)
console.log(arrReduce);
// Với if có 6 giá trị luôn trả về false: 0, '', NaN, undefined, null, false, còn lại tất giá trị trả về true

// Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.