
let i = 1;
let money = 0;
question(1);
function next() {
        i++;
        question(i);
}
function right() {
        document.getElementById("check").innerHTML = "Chính xác!"
        if (i == 5) {
                money += 100;
        }
        else if (i == 6) {
                money += 200;
        }
        else if (i == 7 || i == 8 || i == 9) {
                money += 500;
        }
        else if (i == 10) {
                money += 1000;
        }
        else {
                money += 50;
        }

        document.getElementById("money").innerHTML = money;
}
function wrong() {
        document.getElementById("check").innerHTML = "Sai!"
}
function reloadPage() {
        location.reload();
}

function question() {
        if (i == 1) {
                let ask = ` 
<h4 class="text-white "><span class="fw-bold ">1.</span> Thủ đô của Việt Nam là thành phố nào?</h4>
`;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
<span class="fw-bold ">A.</span> Hà Nội
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">B.</span> Hồ Chí Minh
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">C.</span> Đà Nẵng
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">D.</span> Huế
</button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 2) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
<h4 class="text-white "><span class="fw-bold ">2.</span> Ai là người sáng tạo ra thuyết tương đối?</h4>
`;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
<span class="fw-bold ">A.</span> Albert Einstein
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">B.</span> Isaac Newton
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">C.</span> Stephen Hawking
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">D.</span> Galileo Galilei
</button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 3) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">3.</span> Loại cây nào cho ra trái màu đỏ?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">A.</span> Dâu
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">B.</span> Dừa
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> Xoài
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> Dưa hấu
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 4) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">4.</span> Ai là người đầu tiên bước chân lên mặt trăng?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">A.</span> Buzz Aldrin
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">B.</span> Yuri Gagarin
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> John Glenn
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">D.</span> Neil Armstrong
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 5) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">5.</span> Loại động vật nào chỉ ăn cỏ?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">A.</span> Hổ
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">B.</span> Bò
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> Sóc
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> Hải cẩu
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 6) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">6.</span> Quốc gia nào nổi tiếng với ngọn núi Everest?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">A.</span>Trung Quốc
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">B.</span> Ấn Độ
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">C.</span> Nepal
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> Bhutan
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 7) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">7.</span> Ai là tác giả của bộ tiểu thuyết Harry Potter?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">A.</span>J.K. Rowling
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">B.</span> Stephen King
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> George R.R. Martin
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> J.R.R. Tolkien
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 8) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">8.</span> Ai là nhà phát minh ra đèn điện?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">A.</span> Thomas Edison
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">B.</span> Nikola Tesla
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> Alexander Graham Bell
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> Benjamin Franklin
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 9) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">9.</span>Tượng chúa Kitô phục sinh nằm ở thành phố nào?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">A.</span> Paris
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">B.</span> Rio de Janeiro
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> Rome
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> Jerusalem
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 10) {
                document.getElementById("check").innerHTML = "";
                let ask = ` 
    <h4 class="text-white "><span class="fw-bold ">10.</span> Bộ phim nào là bộ phim hoạt hình đầu tiên của Pixar?</h4>
    `;
                document.getElementById("question").innerHTML = ask;
                let answers = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
    <span class="fw-bold ">A.</span> Toy Story
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">B.</span> Finding Nemo
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">C.</span> The Incredibles
    </button>
    <button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
    <span class="fw-bold ">D.</span> Monsters, Inc.
    </button>`
                document.getElementById('answers').innerHTML = answers;
        }
        if (i == 11) {
                document.getElementById("check").innerHTML = "";
                let win = `<div class="win">
        <h3 class="p-4 ">Xin chúc mừng. Bạn đã chiến thắng!</h3>
        <h4 class="p-4 ">Giải thưởng của bạn là $3000</h4>
    </div>`
                document.getElementById('win').innerHTML = win;
                document.getElementById("question").style.display = "none";
                document.getElementById("answers").style.display = "none";
                document.getElementById("next").innerHTML = "Chơi lại";
                document.getElementById("next").onclick = reloadPage;

        }




}


