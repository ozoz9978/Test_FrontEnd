//1) defer 없는 상태의 스크립트 코드가 실행되었을 때
let btn = document.getElementById("btn"); // HTML Object
let del = document.getElementById("del");
let printImg = document.getElementById("printImg");
let printStar = document.getElementById("printStar");


// console.log(btn);
btn.onclick = write;
del.onclick = remove;
printImg.onclick = drawImg;
printStar.onclick = drawStar;


function write() {
    let result = document.getElementById("result")
    let data = "<h3 style = 'color:red;'>클릭했습니다.</h3>";
    result.innerHTML = data;


};

function remove() {
    let result = document.getElementById("result")
    result.innerHTML = "";


};

function drawImg() {
    let result = document.getElementById("result")
    let data = '<img src="../images/koala.jpg" alt="pic"></img>'
    result.innerHTML = data;
}

function drawStar() {
    let result = document.getElementById("result");
    let data = '';
    for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < (i + 1); ++j)
            data += "*";
        data += "<br>";
    }
    result.innerHTML = data; // 끝태그가 없으면 innerHTML 사용할 수 없다

}

