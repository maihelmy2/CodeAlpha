document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const feedContainer = document.getElementById('feed-container');

    loginBtn.addEventListener('click', () => {
        // Simulate login
        alert('Logging in...');
        loadFeeds();
    });

    function loadFeeds() {
        const mockFeeds = [
            { platform: 'Twitter', content: 'This is a tweet!' },
            { platform: 'Facebook', content: 'This is a Facebook post!' },
            { platform: 'Instagram', content: 'This is an Instagram post!' },
            { platform: 'LinkedIn', content: 'This is a LinkedIn post!' }
        ];

        feedContainer.innerHTML = '';
        mockFeeds.forEach(feed => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            feedItem.innerHTML = `
                <h3>${feed.platform}</h3>
                <p>${feed.content}</p>
            `;
            feedContainer.appendChild(feedItem);
        });
    }
});