const axios = require("axios");
// console.log("A");
// console.log("B");
// console.log("C");

// console.log("A");
// setTimeout(() => {
//     console.log("B1")
// }, 0.5);
// setTimeout(() => {
//     console.log("B2")
// }, 0);
// console.log("C");
// console.log("D");

// A => Đợi 2s => B => C (1)

// A => C 
// Đợi 2s => B | (2) - True

// Tất cả (95%) các hàm được cung cấp từ các thư viện của nodejs hoặc js thì là bất đồng bộ

// a c d b1 b2

// a c d b1 b2


// console.log("A");

// axios.get("https://api.thecatapi.com/v1/images/search?limit=10").then((data) => {
//     console.log("B1")
// })

// axios.get("https://api.thecatapi.com/v1/images/search?limit=20").then((data) => {
//     console.log("B2")
// });
// console.log("C");
// console.log("D");

// function first(callback) { // callback: 1 function ~ second
//     setTimeout(() => {
//         console.log("Ning đang học hãy chờ")
//         callback(); // ~ second();
//     }, 2000)
// }

// function second() {
//     console.log("Đã hoc xong")
// }

// first(second); 



// let promise = new Promise (function (resolve, reject) {})


// function first() {
//     let isNotError = false;
//     return new Promise((resolve, reject) => {
//         if(isNotError) {
//             setTimeout(() => {
//                 resolve("Ning đang học hãy chờ");
//             }, 2000)
//         } else {
//             reject("Error")
//         }
//     })
// }

// function second() {
//     console.log("Đã hoc xong")
// }

// first().then((data) => { // ~ data = Ning đang học hãy chờ
//     console.log(data);
//     second();
// })

// Hàm .then() sẽ đáp lại 1 Promise


async function getData() {
    let res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=1");
    console.log("res", res.data);
    let res2 = await axios.get("https://api.thecatapi.com/v1/images/search?limit=2");
    console.log("res2", res2.data);
}


// axios.get("https://api.thecatapi.com/v1/images/search?limit=10").then((res) => {
//     let data = res.data;
//     console.log(data);
// })

getData();