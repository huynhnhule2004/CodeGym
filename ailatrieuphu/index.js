const questions = [
    {
      question: "Thủ đô của Việt Nam là thành phố nào?",
      answers: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"],
      correctAnswer: "Hà Nội"
    },
    {
      question: "Ai là người sáng tạo ra thuyết tương đối?",
      answers: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
      correctAnswer: "Albert Einstein"
    },
    {
      question: "Loại cây nào cho ra trái màu đỏ?",
      answers: ["Dâu", "Dừa", "Xoài", "Dưa hấu"],
      correctAnswer: "Dâu"
    },
    {
      question: "Ai là người đầu tiên bước chân lên mặt trăng?",
      answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
      correctAnswer: "Neil Armstrong"
    },
    {
      question: "Loại động vật nào chỉ ăn cỏ?",
      answers: ["Bò", "Hổ", "Sóc", "Hải cẩu"],
      correctAnswer: "Bò"
    },
    {
      question: "Quốc gia nào nổi tiếng với ngọn núi Everest?",
      answers: ["Nepal", "Ấn Độ", "Trung Quốc", "Bhutan"],
      correctAnswer: "Nepal"
    },
    {
      question: "Ai là tác giả của bộ tiểu thuyết Harry Potter?",
      answers: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
      correctAnswer: "J.K. Rowling"
    },
    {
      question: "Ai là nhà phát minh ra đèn điện?",
      answers: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
      correctAnswer: "Thomas Edison"
    },
    {
      question: "Tượng chúa Kitô phục sinh nằm ở thành phố nào?",
      answers: ["Rio de Janeiro", "Paris", "Rome", "Jerusalem"],
      correctAnswer: "Rio de Janeiro"
    },
    {
      question: "Bộ phim nào là bộ phim hoạt hình đầu tiên của Pixar?",
      answers: ["Toy Story", "Finding Nemo", "The Incredibles", "Monsters, Inc."],
      correctAnswer: "Toy Story"
    }
  ];

    // Hàm kiểm tra đáp án
    function right() {
        document.getElementById("check").innerHTML = "Chính xác!"
        money += 50;
        document.getElementById("money").innerHTML = money;
    }
    function wrong() {
        document.getElementById("check").innerHTML = "Sai!"
    }


let str = ` 
<h4 class="text-white "><span class="fw-bold ">1.</span> Ai là người đầu tiên lên mặt trăng?</h4>
`;
document.getElementById("question").innerHTML = str;
let cauhoi = `<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">C.</span> Tùng Sơn
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">C.</span> Tùng Sơn
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="wrong()">
<span class="fw-bold ">C.</span> Tùng Sơn
</button>
<button class="col-5 answers bg-info  p-3 border-0 " onclick="right()">
<span class="fw-bold ">D.</span> Neil Armstrong
</button>`
document.getElementById('answers').innerHTML = cauhoi;

let money = 0;
