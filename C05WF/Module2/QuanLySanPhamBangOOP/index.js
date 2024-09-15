let store = new Store("Cửa hàng của Linh");

// let p1 = new Product(1, "Bánh", 2000, "https://cdn.tgdd.vn/Files/2022/04/04/1423817/bat-mi-cach-lam-banh-mi-baguette-phap-gion-xop-dac-ruot-202204041137450765.jpg");
// let p2 = new Product(2, "Kẹo", 3000, "https://cdn.tgdd.vn/Files/2022/04/04/1423817/bat-mi-cach-lam-banh-mi-baguette-phap-gion-xop-dac-ruot-202204041137450765.jpg");
// store.add(p1);
// store.add(p2);

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    store.add(newProduct);
    getAll();
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
}


function getAll() {
    let list = store.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
         <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" style="width: 50px; height: 50px;"></td>
            <td><button onclick="remove(${i})">Xóa</button></td>
             <td><button onclick="showFormEdit(${i})">Sửa</button></td>
        </tr>
      `
    }
    document.getElementById("list-product").innerHTML = html;
}

function showFormEdit(index) {
    let oldProduct = store.getProductByIndex(index);
    document.getElementById("id").value = oldProduct.id;
    document.getElementById("name").value = oldProduct.name;
    document.getElementById("price").value = oldProduct.price;
    document.getElementById("image").value = oldProduct.image;
    document.getElementById("btn").innerHTML = `<button onclick="edit(${index})">Lưu</button> `
}

function edit(index) {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    store.edit(index, newProduct);
    alert("Sửa thành công");
    getAll();
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("btn").innerHTML = `<button onclick="add()">Thêm mới</button> `
}

function remove(index) {
    let isConfirm = confirm("Bạn chắc chứ?")
    if (isConfirm) {
        store.remove(index);
        alert("Xóa thành công");
        getAll();
    }
}

getAll();

// window.location("index2.html")


// Hoàn thành BoB: https://bob.codegym.vn/lesson
// Làm dự án quản lý sinh bằng OOP tương tự demo
// Xây dựng trước HTML, CSS dự án cuối module