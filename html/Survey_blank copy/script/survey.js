document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order-form');
    const timeDisplay = document.getElementById('current-time');
    const summary = document.getElementById('summary-content');
    const summaryContainer = document.getElementById('order-summary');

    // 1초마다 현재 시간 업데이트
    function changeTime() {
        const now = new Date();
        timeDisplay.textContent = `Current Time: ${now.toLocaleTimeString()}`;
    }
    setInterval(changeTime, 1000);

    // 주문 정보 검증 및 요약 표시
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const address = form.address.value.trim();
        const menu = form.menu.value;
        const quantity = parseInt(form.quantity.value, 10);

        if (!name) {
            alert("Please enter your name.");
            form.name.focus();
            return;
        }

        if (!phone || phone.length !== 11 || !/^\d{11}$/.test(phone)) {
            alert("Please enter a valid 11-digit phone number.");
            form.phone.focus();
            return;
        }

        if (!address) {
            alert("Please enter your address.");
            form.address.focus();
            return;
        }

        if (!menu) {
            alert("Please select a menu.");
            return;
        }

        const priceMap = {
            "chicken": 15000,
            "pizza": 20000,
            "tteokbokki": 8000
        };

        const price = priceMap[menu];
        const tax = price * 0.02;
        const serviceFee = price * 0.05;
        const totalPrice = (price + tax + serviceFee) * quantity;

        summary.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Address:</strong> ${address}<br>
            <strong>Menu:</strong> ${menu.charAt(0).toUpperCase() + menu.slice(1)}<br>
            <strong>Quantity:</strong> ${quantity}<br>
            <strong>Total Price:</strong> ${totalPrice.toLocaleString()} KRW<br>
        `;

        summaryContainer.classList.remove('hidden');

        alert("Your order has been placed!");
        form.reset();
    });
});
