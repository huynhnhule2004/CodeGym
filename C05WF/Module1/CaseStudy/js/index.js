let arrayImage = [
    "assets/slide_index_1.jpg",
    "assets/slide_index_2.jpg"
];
let index = 0;

let interval = setInterval(function () {
    let banner = document.getElementById("banner");
    if (index == arrayImage.length - 1) {
        index = 0;
    } else {
        index++;
    }
    banner.setAttribute("src", arrayImage[index]);
}, 3000);


function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var body = document.body;
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        body.style.overflow = "auto"; // Cho phép cuộn lại
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        body.style.overflow = "hidden"; // Ngăn cuộn khi sidebar mở
    }
}

