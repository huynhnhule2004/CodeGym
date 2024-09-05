
/*
let a = 1;
let b = 2;
let c = b;
c = 10;
console.log('b', b);  // b : 2
console.log('c', c);  // c : 10
*/


/*
let obj = { // Object Literal (Cú pháp khởi tạo nhanh 1 đối tượng ở trong Js)
    name: "Linh",
    age: 26,
    gender: "Nam"
}

let arr = [1, 4, 63, 4]; 
// => Kiểu tham chiếu (Object, Array, Function);
*/

/*
let obj = {
    name: "Linh",
    age: 26
}

let obj2 = obj;
obj2.name = "Mèo";
console.log("obj", obj); // {name:"" ; age: 26};
console.log("obj2", obj2); // {name: "" ; age: 26};

// Khi khởi tạo 1 đối tượng mới hoặc 1 mảng mới thì sẽ sinh ra 1 ô nhớ mới bên heap
console.log("obj === obj2", obj === obj2); // true (so sánh địa chỉ ô nhớ)
*/

/*
let obj3 = {
    name: "Linh",
    age: 26
};

let obj4 = {
    name: "Linh",
    age: 26
};

console.log("obj3 === obj4", obj3 === obj4); // false
*/

/*
// Truyền tham trị (Truyền các giá trị có kiểu dữ liệu: number, boolean, null, ... vào trong hàm)
function changeValue(a, b) {
    // let a = a1; // chạy ngầm
    // let b = a2;
    a = 10;
    b = 20;
}


let a1 = 1;
let a2 = 2;
changeValue(a1, a2); // Truyền tham trị : Các giá trị bên trong hàm có thay đổi cũng k làm ảnh hưởng tới giá trị gốc
console.log("a1: ", a1); // 1
console.log("a2: ", a2); // 2
*/


/*
// Truyền tham chiếu (truyền các giá trị có kiểu dữ liệu: object, array vào  tromg hàm);
function changeValue(object) {
   // let object = data; = #123 (chạy ngầm) gán tham chiếu
   object.name = "C05WF";
};

let data = { // #123
    name: "Linh",
    age: 26
}
changeValue(data); // Truyền tham chiếu
console.log(data); 
*/


function swap(a1, b1) {
    /*
    let a1 = 5
    let b1 = 10
    */
    var temp = a1;
    a1 = b1;
    b1 = temp;
    // a1 = 10, b1 = 5
}

var a = 5;
var b = 10;
swap(a, b);
document.write("a = " + a + ", b = " + b);