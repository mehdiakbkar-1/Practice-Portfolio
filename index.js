function openCity(evt, cityName) {
    var i, tabcontent, manulinks
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    manulinks = document.getElementsByClassName("manulinks");
    for (i = 0; i < manulinks.length; i++) {
        manulinks[i].className = manulinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).classList.add("active");
    evt.currentTarget.className += " active";

    // Start or stop bubble animation based on active tab
    if (cityName === 'home') {
        startBubbleAnimation();
    } else {
        stopBubbleAnimation();
    }
}

// Open the default tab
document.getElementById("defaultOpen").click();

let bubbleInterval;

function createBubble() {
    const container = document.querySelector('#home .bubbles-container');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 5 + 5; // Random size between 10px and 30px
    bubble.style.width = `${size}px`;
 
    bubble.style.height = `${size}px`;
    
    bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position

    // Random horizontal movement
    const xMove = (Math.random() - 0.5) * 100; // Random value between -100 and 100
    bubble.style.setProperty('--x-move', `${xMove}px`);
    
    container.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 20000); // Remove bubble after animation
}

function generateBubbles() {
    for (let i = 0; i < 5; i++) { // Generate 5 bubbles at once
        createBubble();
    }
}

function startBubbleAnimation() {
    bubbleInterval = setInterval(generateBubbles, 300); // Create bubbles every 300ms
}

function stopBubbleAnimation() {
    clearInterval(bubbleInterval);
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => bubble.remove());
}

 // Get all elements with the class 'portfolio-item'
 let portfolioItems = document.querySelectorAll('.portfolio-item');

 // Function to show the upper div
 let Show = (event) => {
     let upper = event.currentTarget.querySelector('.upper');
     upper.style.opacity = "1";
     upper.style.transform = "scale(1,1)";
 };

 // Function to hide the upper div
 let Hide = (event) => {
     let upper = event.currentTarget.querySelector('.upper');
     upper.style.opacity = "0";
     upper.style.transform = "scale(0.8, 0.8)";
 };

 // Add event listeners to each portfolio item
 portfolioItems.forEach(item => {
     item.addEventListener('mouseover', Show);
     item.addEventListener('mouseout', Hide);
 });
