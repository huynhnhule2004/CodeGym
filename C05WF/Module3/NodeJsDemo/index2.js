// Let và Const
// var

/*
- Hosting: Được phép sử dụng trước khi khai báo biến: var được, let không
- Cho phép khai báo lại biến: var có, let không
- Scope: let (block: if, for, {},...), var (function scope

- let và const khác nhau: 
 + let: cho phép gán lại giá trị
 + const: chỉ nhận 1 giá trị trong suốt chương trình
*/

/*
// Template String.
let a = "Linh";
let b = "C05WF";
let c = a + " học lớp " + b; // c = Linh học lớp c05WF
let d = `${a} học lớp ${b}`;
console.log(d);
*/

// Arrow Function
/*
let go = () => {}
() => ()


let go = () => (1);
let a = go();
console.log(a);
*/

// Destructuring;
// let person = {
//     name: "Linh",
//     age: 20,
//     gender: "Nam"
// }
// let name = person.name;
// let age = person.age;
// let { name, age, gender } = person;
// console.log("Name ", name);
// console.log("Age ", age);

// let arr = [1, 4, 5, 6];
// let [a, b] = arr;
// console.log("a", a);
// console.log("b", b);
/*
let obj = {
    name: "Linh",
    age: 20
}
let obj2 = { ...obj, name: "Mèo", gender: "Nam" }; // Spread Operator
// obj2.name = "Mèo";
console.log("obj", obj);
console.log("obj2", obj2);

let arr = [44, 5, 66, 3];
let newArr = [...arr];
newArr.push(543);
console.log("arr", arr);
console.log("newArr", newArr)
*/