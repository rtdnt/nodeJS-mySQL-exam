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
    const chatbotIcon = 'images/chatbot-icon.png';
    const agentIcon = 'images/agent-icon.png';

    // Initial chatbot greeting
    setTimeout(() => {
        displayMessage(chatbotName, 'Hello! How can I assist you today?', 'chatbot-message', chatbotIcon);
    }, 500);

    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    minimizeBtn.addEventListener('click', function () {
        chatWindow.classList.toggle('minimized');
        const expanded = !chatWindow.classList.contains('minimized');
        chatWindow.setAttribute('aria-expanded', expanded);

        if (!expanded) {
            menuContent.classList.remove('show');
            menuBtn.setAttribute('aria-expanded', 'false');
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
        displayMessage(customerName, messageText, 'customer-message', null);

        // Handle "talk to human" request
        if (messageText.toLowerCase() === 'talk to human') {
            displayMessage('System', 'Connecting you to a human agent...', 'system-message', null);
            setTimeout(() => {
                displayMessage('Agent', 'You are now connected with a human agent.', 'agent-message', agentIcon);
            }, 2000); // Simulate a delay for connecting to a human agent
            return;
        }

        // Clear input field
        inputField.value = '';

        // Simulate chatbot response
        setTimeout(function () {
            displayMessage(chatbotName, 'This is a placeholder response from the chatbot.', 'chatbot-message', chatbotIcon);
        }, 1000);
    }

    function displayMessage(sender, text, messageClass, iconSrc) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', messageClass);
        messageDiv.setAttribute('role', 'article');

        if (iconSrc) {
            const iconImg = document.createElement('img');
            iconImg.src = iconSrc;
            iconImg.alt = `${sender} icon`;
            iconImg.classList.add('icon');
            messageDiv.appendChild(iconImg);
        }

        const messageContent = document.createElement('div');
        messageContent.innerHTML = `
            <span class="${messageClass.includes('customer') ? 'customer-name' : 'chatbot-name'}">${sender}:</span>
            <p class="message-text">${text}</p>
        `;
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
