// dom 에 접근해서 객체를 받아오기
// 1) getElementById("아이디값")
console.log('-------------------------getElementById()')
let writer = document.getElementById("writer");
console.log(writer);

// 2)getElementsTagName("태그명")
console.log('--------------------------getElementByTagName()')
let tags = document.getElementsByTagName("p");
console.log(tags.length);
console.log(tags);

// 3) getElementsByClassName("클래스명")
console.log('--------------------------getElementByClassName()')
let poem = document.getElementsByClassName("poem");
console.log(poem.length);
console.log(poem);

// 4) querySelector() 문서내 css 선택자에 맞는 데이터 한개만 반환
console.log('--------------------------querySelector()')
let poem2 = document.querySelector(".poem");
console.log("poem의 길이: " + poem2.length); //undefined
console.log("poem의 내용:" + poem2);

// 5) querySelectorAll() 문서내 css 선택자에 맞는 데이터 여러개 반환
// getElementByClassName():HTMLCollections타입으로 반환
// querySelectorAll : nodeList타입으로 반환
console.log('--------------------------querySelector()')
let poem3 = document.querySelectorAll(".poem");
console.log("poem의 길이: " + poem3.length); //2
console.log("poem의 내용:" + poem3);
console.log(poem3[0]); // nodeList가 배열처럼 사용 가능하다
poem3[0].style.color = 'red';
poem3[1].style.backgroundColor = 'cyan';

// 6) getAttribute("속성명"), setAttribute("속성명","값")
// - HTML요소의 특정 속성값을 조회 (get) 하거나 치환(set) 하는 메소드
console.log('--------------------------getAttribute()')
let value = document.getElementById("image").getAttribute("src");
console.log(value)
console.log(document.getElementById("image").getAttribute("alt"))

//다른 값으로 치환(set) - 이벤트 소스는 버튼이다
document.getElementById("change").addEventListener('click', function () {
    document.getElementById('image').setAttribute('src', '../images/koala.jpg');
});

// 이벤트 소스가 그림
// 1) 그림을 가져온다 --> 이벤트를 연결
document.getElementById("image").addEventListener('mouseenter', function () {
    document.getElementById('image').setAttribute('src', '../images/koala.jpg');
});
// 2) 
document.getElementById("image").addEventListener('mouseleave', function () {
    document.getElementById('image').setAttribute('src', '../images/bullet.png');
});