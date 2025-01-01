document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('order_form').addEventListener('submit', function(e) {
        e.preventDefault(); // Запобігаємо стандартній відправці форми

        // Отримуємо значення полів форми
        var name = document.querySelector('input[name="name"]').value;
        var phone = document.querySelector('input[name="phone"]').value;
        var productData = document.querySelector('select[name="product_data"]').value;

        // Формуємо повідомлення
        var message = `(магазин чаклуна) Нове замовлення:\nІм'я та прізвище: ${name} \nТелефон: ${phone}\nКількість: ${productData}`;

        // Ваш токен та ID чату
        var token = '7020239144:AAHaXBoS_6YSX9DKTB8jpi2EQ5ESk6j8-c4';
        var chatId = 899042767; // Замініть YOUR_CHAT_ID на ваш реальний ID чату

        // Відправляємо повідомлення через Telegram API
        fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Після успішної відправки, одразу перенаправляємо на сторінку "Дякую"
            window.location.href = "./potter_files/thank_you_page.html"; 
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Помилка при відправленні замовлення.');
        });
    });
});