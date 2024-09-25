document.getElementById('survey-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phonePrefix = document.getElementById('phone-prefix').value;
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const tools = Array.from(document.querySelectorAll('input[name="tools"]:checked')).map(tool => tool.value);
    const comments = document.getElementById('comments').value.trim();

    if (!name) {
        alert("Please enter your name.");
        document.getElementById('name').focus();
        return;
    }

    if (!phoneNumber || phoneNumber.length !== 8 || isNaN(phoneNumber)) {
        alert("Please enter an 8-digit phone number without any dashes.");
        document.getElementById('phone-number').focus();
        return;
    }

    if (!email.includes('@')) {
        alert("Please enter a valid email address.");
        document.getElementById('email').focus();
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Survey Results</h2>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Phone Number:</strong> ${phonePrefix}-${phoneNumber}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Tools of Interest:</strong> ${tools.length > 0 ? tools.join(', ') : 'None selected'}</li>
            <li><strong>Additional Comments:</strong> ${comments || 'No comments provided'}</li>
        </ul>
    `;
});

