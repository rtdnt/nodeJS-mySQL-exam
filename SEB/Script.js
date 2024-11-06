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
        if (!expanded) scrollToBottom(); // Scroll to bottom when minimized
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

        // Clear input field
        inputField.value = '';

        // Handle "talk to human" request
        if (messageText.toLowerCase() === 'talk to human') {
            displayMessage('System', 'Connecting you to a human agent...', 'system-message', null);
            setTimeout(() => {
                displayMessage('Agent', 'You are now connected with a human agent.', 'agent-message', agentIcon);
            }, 2000); // Simulate a delay for connecting to a human agent
            return;
        }

        // Show typing animation
        showTypingIndicator();

        // Simulate chatbot response
        setTimeout(function () {
            hideTypingIndicator();
            displayMessage(chatbotName, 'This is a placeholder response from the chatbot.', 'chatbot-message', chatbotIcon);
        }, 2000); // Typing animation duration
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

        // Scroll to bottom using scrollIntoView
        scrollToBottom();
    }

    function scrollToBottom() {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const lastMessage = messagesContainer.querySelector('.message:last-child');
        if (lastMessage) {
            lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'typing-indicator');
        typingIndicator.innerHTML = `
            <span class="chatbot-name">Virtual Advisor is typing...</span>
            <div class="typing-dots">
                <span>.</span><span>.</span><span>.</span>
            </div>
        `;
        messagesContainer.appendChild(typingIndicator);
        scrollToBottom();
    }

    function hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
            scrollToBottom();
        }
    }
});
