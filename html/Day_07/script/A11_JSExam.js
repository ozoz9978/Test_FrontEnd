// 서버에서 받은 데이터
// 분해해서 TABLE로 만들어 HTML문서에 출력하시오.
// 단 자격증이 없는 사람은 '없음' 이라고 나옴.

let receivedData = [
    { 'id': '001', name: '홍길동', license: '정보처리기사' },
    { 'id': '002', name: '임꺽정', license: '빅데이터 분석기사' },
    { 'id': '003', name: '전우치', license: 'AdsP' },
    { 'id': '004', name: '손오공', },
    { 'id': '005', name: '사오정', license: '운전면허증' }

];

let tableBody = document.getElementById('licenseTableBody');
// 사용하는 함수 for each, destructing의 디폴트 파라미터, 화살표 함수

receivedData.forEach(person => {
    let row = document.createElement('tr');

    let idCell = document.createElement('td');
    idCell.textContent = person.id;
    row.appendChild(idCell);

    let nameCell = document.createElement('td');
    nameCell.textContent = person.name;
    row.appendChild(nameCell);

    let licenseCell = document.createElement('td');
    licenseCell.textContent = person.license ? person.license : '없음';
    row.appendChild(licenseCell);

    tableBody.appendChild(row);
});