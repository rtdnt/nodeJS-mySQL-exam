document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('sendBtn');
    const inputField = document.getElementById('chatbot-input-field');
    const messagesContainer = document.querySelector('.chatbot-messages');
    const minimizeBtn = document.querySelector('.chatbot-minimize');
    const closeBtn = document.querySelector('.chatbot-close');
    const menuBtn = document.querySelector('.chatbot-menu');
    const menuContent = document.querySelector('.chatbot-menu-content');
    const feedbackLink = document.getElementById('feedback-link');
    const chatWindow = document.querySelector('.chatbot-window');
    const chatbotName = 'Virtual Advisor';
    const customerName = 'You';

    // Initial chatbot greeting
    displayMessage(chatbotName, 'Hello! How can I assist you today?', 'chatbot-message');

    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    minimizeBtn.addEventListener('click', function () {
        chatWindow.classList.toggle('minimized');
        if (chatWindow.classList.contains('minimized')) {
            chatWindow.setAttribute('aria-expanded', 'false');
        } else {
            chatWindow.setAttribute('aria-expanded', 'true');
        }
    });

    closeBtn.addEventListener('click', function () {
        chatWindow.style.display = 'none';
    });

    menuBtn.addEventListener('click', function () {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
        menuBtn.setAttribute('aria-expanded', !expanded);
        menuContent.classList.toggle('show');
    });

    feedbackLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Feedback form will be here.');
    });

    function sendMessage() {
        const messageText = inputField.value.trim();
        if (messageText === '') return;

        // Display customer message
        displayMessage(customerName, messageText, 'customer-message');

        // Clear input field
        inputField.value = '';

        // Simulate chatbot response
        setTimeout(function () {
            displayMessage(chatbotName, 'This is a placeholder response from the chatbot.', 'chatbot-message');
        }, 1000);
    }

    function displayMessage(sender, text, messageClass) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', messageClass);
        messageDiv.setAttribute('role', 'article');
        messageDiv.innerHTML = `
            <span class="${messageClass.includes('customer') ? 'customer-name' : 'chatbot-name'}">${sender}:</span>
            <p class="message-text">${text}</p>
        `;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
