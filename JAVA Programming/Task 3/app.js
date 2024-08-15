document.addEventListener('DOMContentLoaded', async () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Simple predefined responses for demonstration
    const responses = {
        'hi': 'Hello! How can I assist you today?',
        'how are you': 'I am a chatbot. I am always here to help!',
        'bye': 'Goodbye! Have a nice day.'
    };

    function addMessage(message, sender) {
        const msgElement = document.createElement('div');
        msgElement.textContent = message;
        msgElement.classList.add('chat-message', sender);
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function botResponse(message) {
        let response = 'I am sorry, but I did not understand that.';
        // Basic response selection based on predefined responses
        for (const key in responses) {
            if (message.toLowerCase().includes(key)) {
                response = responses[key];
                break;
            }
        }
        return response;
    }

    sendBtn.addEventListener('click', async () => {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        addMessage(userMessage, 'user');
        userInput.value = '';

        const botMessage = await botResponse(userMessage);
        addMessage(botMessage, 'bot');
    });

    // Initial greeting message from the bot
    addMessage('Hello! How can I assist you today?', 'bot');
});