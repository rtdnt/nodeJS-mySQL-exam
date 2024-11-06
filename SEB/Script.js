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

    // Event listeners for buttons
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

    // Function to send a message
    function sendMessage() {
        const messageText = inputField.value.trim();
        if (messageText === '') return;

        // Add customer message
        const customerMessage = document.createElement('div');
        customerMessage.classList.add('message', 'customer-message');
        customerMessage.setAttribute('role', 'article');
        customerMessage.innerHTML = `
            <span class="customer-name">You:</span>
            <p class="message-text