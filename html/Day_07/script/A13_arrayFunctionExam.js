
// 1) ary안에 1~100 사이의 정수 10개를 발생시켜 추가한다.
// 2) 그 후, 이 중에 홀수인 데이터의 위치값을 찾아서 새로운 배열을 생성한다.

let ary = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1; // 1~100 사이의 정수
    ary.push(randomNum);
}

let idx = [];
for (let i = 0; i < ary.length; i++) {
    if (ary[i] % 2 !== 0) { // 홀수인지 확인
        idx.push(i); // 홀수인 데이터의 위치값(인덱스)을 idx 배열에 추가
    }
}

console.log("발생시킨 배열:", ary);
console.log("홀수인 데이터의 위치값 배열:", idx);
