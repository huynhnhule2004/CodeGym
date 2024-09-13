// Let và Const (mới và khuyến khích sử dụng)
// var (cách khai báo cũ)


// Cơ chế hosting
// console.log(a);
// var a = 10;
// let a = 10;


/*
// Cơ chế khai báo biến
let a = 20;
// ... Code here 
let a = 10; // let: chỉ cho gán biến (Không cho khai báo lại trong cùng 1 phạm vi)
// ... Code here 
a++;
console.log(a);
*/

// Scope (Phạm vi truy cập)
/*
// var: function scope

// function go() {
//     var a = "Hello";
// }
// go();
// console.log(a);

//Block Scope: {}, if, for,...
if(true) {
    var a = 10;
}
a++;
console.log(a);

let: block scope
if(true) {
    let a = 10;
} 

console.log(a);

// for(let i = 0; i < 10; i++) {
//     console.log('i', i);
// }

// console.log(i);

// function go() {
//     let a = 20;
// }

// console.log(a);

// const thì tương tự let nhưng const sẽ chỉ nhận 1 giá trị trong suốt chương trình.
// const PI = 3.14;
// PI = 4.5;
*/



/*
// Tính năng 2: Arrow Function
 - Chỉ gọi hàm sau lúc khai báo
 C1:
 let go = (name) => {
    console.log(name + " is going");
} 

let go = (name) => {
    let text = name + " is going";
    return text;
} 

- Khi hàm cần trả về giá trị Vế phải khi có ngoặc {} thì phải có "return" còn () thì không cần.


let go = (name) => (name + " is going")
// Vế phải: Khi không có ngoặc {} hoặc chỉ ngoặc tròn thì dữ liệu bên trong là giá trị trả về
// Vế trái: nếu chỉ 1 tham số có thể bỏ ngoặc, nếu không có tham số nào hoặc nhiều hơn 1 thì phải có ()
let go2 = () => {
    return "Hello";
}

let go3 = (a, b) => (a + b);

let text = go("Linh");
console.log(text);


// function go(name) {
//     console.log(name + " is going");
// }

// Viết theo cả 2 cách: 1 hàm nhận vào 2 tham số a và b, sau đó trả lại giá trị trung bình của 2 số đố
// let avg = (a, b) => {
//     let sum = a + b;
//     return sum / 2;
// };

// let avg = (a, b) => ((a + b) / 2);
// let data = avg(4, 6);
// console.log(data);

*/

/*
// Tính năng 3: Destructuring

let obj = {
    name: "Linh",
    age: 27,
    school: "CodeGym",
    gender: "Nam"
};

let name = obj.name; 
let age = obj.age;
let school = obj.school;
let score = obj.score;
<=>

let { name, age, school, score } = obj;
console.log("Name:", name);
console.log("Age:", age);
console.log("School:", school);
console.log("Score:", score);
*/

// Tính năng 4: Spread Operator (Toán tử dải)
/*
let obj = {
    name: "Linh",
    age: 22
}

// let obj2 = obj;

let obj3 = {
    isSick: true,
    school: "CodeGym",
    age: 31
}
let obj2 = { ...obj, score: 10, gender: "Nam", ...obj3 }; // Sử dụng để copy 1 obj và thường để tránh tham chiếu

obj2.name = "Nhân";

console.log("obj", obj); // {name: "Linh", age: 22}
console.log("obj2", obj2);  // {name: "Nhân", age: 22}

//Sử dụng với mảng
let arr = [1, 4, 5, 6];
// let newArr = arr;
let newArr = [...arr, 101];
newArr.push(100);
console.log("arr: ", arr);
console.log("newArr: ", newArr);
*/