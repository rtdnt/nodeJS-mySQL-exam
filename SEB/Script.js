document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('sendBtn');
    const inputField = document.getElementById('chatbot-input-field');
    const messagesContainer = document.querySelector('.chatbot-messages');
    const minimizeBtn = document.querySelector('.chatbot-minimize');
    const closeBtn = document.querySelector('.chatbot-close');
    const menuBtn = document.querySelector('.chatbot-menu');
    const menuContent = document.querySelector('.chatbot-menu-content');
    const feedbackLink = document.getElementById('feedback-link');
    const feedbackContainer = document.getElementById('feedback-container');
    const chatWindow = document.querySelector('.chatbot-window');
    const chatbotName = 'Virtual Advisor';

    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    minimizeBtn.addEventListener('click', function () {
        chatWindow.classList.toggle('minimized');
    });

    closeBtn.addEventListener('click', function () {
        chatWindow.style.display = 'none';
    });

    menuBtn.addEventListener('click', function () {
        menuContent.classList.toggle('show');
    });

    feedbackLink.addEventListener('click', function (e) {
        e.preventDefault();
        feedbackContainer.hidden = false;
    });

    function sendMessage() {
        const messageText = inputField.value.trim();
        if (messageText === '') return;

        // Customer message
        const customerMessage = document.createElement('div');
        customerMessage.classList.add('message', 'customer-message');
        customerMessage.setAttribute('role', 'article');
        customerMessage.innerHTML = `
            <span class="customer-name">You:</span>
            <p class="message-text">${messageText}</p>
        `;
        messagesContainer.appendChild(customerMessage);

        // Chatbot response placeholder
        const chatbotMessage = document.createElement('div');
        chatbotMessage.classList.add('message', 'chatbot-message');
        chatbotMessage.setAttribute('role', 'article');
        chatbotMessage.innerHTML = `
            <span class="chatbot-name">${chatbotName}:</span>
            <p class="message-text">This is a placeholder response from the chatbot.</p>
        `;
        messagesContainer.appendChild(chatbotMessage);

        inputField.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
