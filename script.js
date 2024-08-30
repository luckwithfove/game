document.addEventListener('DOMContentLoaded', function () {
    const bottle = document.getElementById('bottle');
    const spinButton = document.getElementById('spinButton');
    const topicDisplay = document.getElementById('topicDisplay');
    const coin = document.getElementById('coin');

    const topics = ['Favorite', 'How Often', 'Relationship', 'Embarrassing', 'Dreams', 'Fun Facts'];
    let canTossCoin = true;
    let roundsSinceLastToss = 0;

    spinButton.addEventListener('click', spinBottle);
    coin.addEventListener('click', tossCoin);

    function spinBottle() {
        const randomAngle = Math.floor(Math.random() * 360) + 360; // Ensures at least one full spin
        bottle.style.transform = `rotate(${randomAngle}deg)`;
        
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        setTimeout(() => {
            topicDisplay.innerText = `Topic: ${randomTopic}`;
        }, 3000); // Delay to match bottle spin duration

        roundsSinceLastToss++;

        if (roundsSinceLastToss >= 3) {
            canTossCoin = true;
        }
    }

    function tossCoin() {
        if (!canTossCoin) {
            alert('You cannot toss the coin again until 3 rounds have passed.');
            return;
        }

        const isHeads = Math.random() < 0.5;
        coin.src = isHeads ? 'coin-heads.png' : 'coin-tails.png';
        coin.classList.add('toss');

        setTimeout(() => {
            coin.classList.remove('toss');
        }, 1000); // Match this to the coin's CSS transition duration

        canTossCoin = false;
        roundsSinceLastToss = 0;
        
        const newTopic = topics[Math.floor(Math.random() * topics.length)];
        setTimeout(() => {
            topicDisplay.innerText = `New Topic: ${newTopic}`;
        }, 1000); // Show new topic after coin toss animation
    }
});

