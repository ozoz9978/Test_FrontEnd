// 이벤트 소스 얻어오기
document.getElementById("submit").addEventListener('click', idCheck);

// 이벤트 핸들러
function idCheck() {
    let username = document.getElementById("username");
    if (username.value.trim().length == 0) {
        alert("이름을 입력하세요");
        username.select();
        return;
    }

    let phone1 = document.getElementById("phone1").value;
    let phone2 = document.getElementById("phone2");
    if (isNaN(phone2.value) || phone2.value.trim().length != 8) {
        alert("-를 제외한 정확한 길이의 숫자만 입력해주세요");
        phone2.select();
        return;
    }
    let phone = phone1 + phone2.value; // 전화번호 조합

    let email = document.getElementById("email");
    if (!email.value.trim().includes("@")) {
        alert("정확한 이메일타입으로 입력해 주세요");
        email.select();
        return;
    }

    // Radio 버튼 값 추출
    let radioButtons = document.getElementsByClassName("path1"); // name 속성으로 radio 버튼들 가져오기
    let selectedRadio = [];
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedRadio.push(radioButton.value);
        }
    }

    // Checkbox 값 추출
    let checkboxes = document.getElementsByClassName("path2");
    let selectedCheckboxes = [];
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedCheckboxes.push(checkbox.value);
        }
    }

    let text = document.getElementById("기타").value;

    // 최종 결과 출력
    let result = `<h2>[최종 결과]</h2><ul> `;
    result += `<li>이름 : ${username.value}</li>`;
    result += `<li>전화번호 : ${phone}</li>`;
    result += `<li>Email : ${email.value}</li>`;
    result += `<li>직업 : Application Developer</li>`;
    result += `<li>가장 많이 사용하는 구글 서비스 : ${selectedRadio}</li>`;
    result += `<li>기능강화가 필요한 도구 : ${selectedCheckboxes.join(', ')}</li>`;
    result += `<li>남기실 말씀 : ${text}</li>`;
    result += '</ul>';

    document.getElementById("final").innerHTML = result;  // 완성
}
