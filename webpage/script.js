document.addEventListener("DOMContentLoaded", () => {
    const chatBoxes = document.querySelectorAll('.chat-box');
    const chatForms = document.querySelectorAll('.chat-form');

    function closeChatBox() {
        chatBoxes.forEach(box => box.classList.add('hidden'));
    }

    function openChatBox(id) {
        const chatBox = document.getElementById('chat-box');
        chatBox.classList.remove('hidden');
        const chatName = document.getElementById('chat-name');
        chatName.textContent = id;
    }

    chatForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const input = form.querySelector('#chat-input');
            const chatContent = document.querySelector('.chat-content');
            chatContent.innerHTML += `<div class="message user-message">${input.value}</div>`;
            input.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;
        });
    });

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            openChatBox(button.textContent);
        });
    });

    document.querySelectorAll('.chat-header button').forEach(button => {
        button.addEventListener('click', closeChatBox);
    });

    // Example data for charts
    const ctx1 = document.getElementById('anomalyChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Anomalies Detected',
                data: [5, 10, 15, 10, 5, 8],
                borderColor: '#ff9800',
                backgroundColor: 'rgba(255, 152, 0, 0.2)',
                borderWidth: 2,
                fill: true,
            }]
        }
    });

    const ctx2 = document.getElementById('forecastChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Product A', 'Product B', 'Product C'],
            datasets: [{
                label: 'Forecast Demand',
                data: [100, 150, 200],
                backgroundColor: '#4caf50',
                borderColor: '#388e3c',
                borderWidth: 1,
            }]
        }
    });
});
