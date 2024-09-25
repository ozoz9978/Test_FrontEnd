// Number 클래스 : 숫자를 다루는 클래스
// 1. 문자열을 숫자로 변환
console.log("--------------------------------Number()");
let data = "2.5";
let temp = Number(data);

console.log(temp, typeof temp);

let data2 = "2.5a7";
temp = Number(data2); // NaN
console.log(temp);

// 2. 문자열을 숫자로 변환하는 다른 메소드
console.log(parseInt(data));
console.log(parseFloat(data));
console.log(parseInt(data2)); // 2 변환할 수 있는 부분까지만 전환 (2.5정도 까지만)

// 3. 자바스크립트의 최대, 최솟값을 확인
console.log(`Float형 최대값: ${Number.MAX_VALUE}`);
console.log(`Float형 최소값: ${Number.MIN_VALUE}`);














