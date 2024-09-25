// event source
let btn = document.getElementById("btn");
btn.onmouseenter = changeColor; // 이벤트 버블링이라는 처리 때문에 사용 권장하지 않음
// event target
let theBody = document.getElementById("theBody");

//event handler
let cnt = 0;
function changeColor() {
    let color = ["yellow", "skyblue", "pink", "silver"];
    theBody.style.backgroundColor = color[cnt];
    cnt++;
    if (cnt >= color.length) cnt = 0;

}