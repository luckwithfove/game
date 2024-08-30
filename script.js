let topics = ["Favorite", "How often", "Relationship", "Hobbies", "Work", "Travel"];
let canTossCoin = true;
let tossCooldown = 0;
const coinCooldownLimit = 3;

function spinBottle() {
    if (!canTossCoin && tossCooldown < coinCooldownLimit) {
        tossCooldown++;
        if (tossCooldown === coinCooldownLimit) {
            canTossCoin = true;
        }
    }

    const bottle = document.getElementById("bottle");
    const rotationDegrees = Math.floor(Math.random() * 3600) + 360; // Random rotation between 360 and 3960 degrees
    bottle.style.transform = `rotate(${rotationDegrees}deg)`;

    setTimeout(() => {
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        document.getElementById("topic-display").innerText = `Topic: ${randomTopic}`;
    }, 2000);
}

function tossCoin() {
    if (canTossCoin) {
        const coin = document.getElementById("coin");
        const result = Math.random() < 0.5 ? "win" : "loss";
        coin.style.transform = "rotateY(1800deg)";

        setTimeout(() => {
            alert(`Coin result: ${result.toUpperCase()}`);
            coin.style.transform = "";
            if (result === "win") {
                const newTopic = topics[Math.floor(Math.random() * topics.length)];
                document.getElementById("topic-display").innerText = `Topic: ${newTopic}`;
            }
            canTossCoin = false;
            tossCooldown = 0;
        }, 600);
    } else {
        alert("You need to wait for 3 spins before tossing the coin again!");
    }
}

