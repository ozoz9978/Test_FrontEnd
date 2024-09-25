/*
    문자열 관련 메소드
    문자열의 특징 : sequence 데이터이면서 immutable 한 타입
    1) charAt(index), at(index) : 전달된 인덱스 위치에 문자 1개 반환
    2) startsWith(str), endsWith(str), include(str), search(str)
    3) replace (m, n) : 문자열 m을 찾아 n으로 수정
    4) slice (index1, index2) : 인덱스 1 ~ 인덱스 2-1 까지 부분문자열 반환
    5) substring() : 부분문자열 반환, substr은 ES5 이후에 사용을 권장하지 않음


*/

let data = 'abcdefg';
// charAt() , at()
console.log(data.charAt(3));
console.log(data.at(3));

// search(), startswith(), endsWith()
data = 'Hello, world! Welcome to the Javascript!';
console.log(data.startsWith('Hello')); // true - 불리언반환
console.log(data.endsWith('~')); //false - 불리언 반환
console.log(data.includes('world')); //true - 불리언 반환
console.log(data.search('world')); // 찾는 글자의 인덱스 값으로 반환
console.log(data.search('earth')); // -1은 찾는 글자가 없다는 뜻

// replace (m,n) : 
let text = data.replace('Hello', 'Hi');
console.log('원본', data);
console.log('수정본', text);

// slice (m,n) 사용시 주의사항 (앞<뒤)** 에러도 없고 데이터도 없다
console.log(data.slice(5, 10)); // wor
console.log(data.slice(-5, -1)); // ript -1은 가장 마지막 데이터

//subString (m,n) : 부분문자열을 추출, 음수 사용불가

console.log(data.substring(5, 10)); // wor
console.log(data.substring(10, 5)); // ript -1은 가장 마지막 데이터


// split(str) : 문자열의 토큰화 반환타입은 재배열
let arr = data.split(' ');
console.log(typeof arr);
console.log(arr.length);

//trim  문자열 앞, 두의 공백문자를 제거
data = 'Hollo   ';
console.log('문자열의 길이', data.length);
console.log('trim 문자열의 길이', data.trim().length);

