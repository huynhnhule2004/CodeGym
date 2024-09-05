// Các hàm dùng để duyệt mảng trong Js.

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// function go(name) {
//     console.log("Hello " + name)
// }

// Arrow Function (Hàm mũi tên)
// let go = (name) => {
//     console.log("Hello " + name);
// }

// go("Linh");



/*
// forEach là 1 hàm có sẵn của array sử dụng để duyệt mảng, đối số nhận vào sẽ 1 hàm con
arr.forEach(
    (item) => { // item: tham số đại diện cho các giá trị trong mảng
        console.log(item);
    }
);
*/

/*
let arr = [1, 5, 3, 4, 32];
// map: dùng để duyệt qua các phần tử trong mảng, trả về 1 mảng mới từ các giá trị được trả về trong hàm truyền vào
let arr2 = arr.map(
    (item) => {
        return item * 3;
    }
);

console.log(arr2); // [3, 15, 9, 12, 96];
*/


/*
let arr = [1, 5, 3, 4, 32];
let arr2 = arr.filter(
    (item) => {
        return item % 2 == 0; // Chỉ lấy các giá trị thỏa mãn điều kiện (true) trên (phần tử chẵn)
    }
)

console.log(arr2);
*/

let arr = [1, 5, 3, 4, 32]; // tổng các phần tử
// reduce: duyệt mảng và lấy lại các giá trị tổng hợp các giá trị trong mảng
/*
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
*/

let sum = arr.reduce(
    (sum1, item) => {  // sum1: giá trị tạm thời mà reduce tổng hợp được đến phần từ đang duyệt
        return sum1 + item; // sum1 = 13 + 32 = 45;
    }
)

console.log(sum);