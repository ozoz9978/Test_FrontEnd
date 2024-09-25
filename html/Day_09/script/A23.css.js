
//이벤트 소스
let change = document.getElementById("change");
let view = document.getElementById("view");
let changecolor = document.getElementById("changecolor");

//이벤트 핸들러와 소스 연결
change.addEventListener('click', changeHandler);
change.addEventListener('click', viewHandler);
change.addEventListener('click', changecolorHandler);

// 이벤트 핸들러
function changeHandler() {
    let song = document.getElementById("song");
    song.style.color = 'white';
    song.style.backgroundColor = 'black';
    song.style.fontSize = '1.2em';

}
function viewHandler() {
    let box = document.getElementsByClassName("box")[0];
    box.style.visibility = 'visible';
}
function changecolorHandler() {
    let box = document.getElementsByClassName("box")[0];
    box.style.visibility = 'visible';

    setInterval(() => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let color = `rgb(${red},${green},${blue})`;
        box.style.backgroundColor = color;

    }, 1000);
}