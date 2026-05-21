// --- Navigation Logic with Fade effect class handle ---
function showPage(pageId) {
    // 1. Fade out current page first for smooth effect
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
        page.style.display = 'none'; // Instant hide for next page to show
    });

    // 2. Show the selected page and fade in via CSS animation
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
    selectedPage.classList.add('active-page');
}

// --- Letter Content (Updated Messages) ---
function openLetter(letterType) {
    showPage('letter-page'); 

    const titleElement = document.getElementById('letter-title');
    const textElement = document.getElementById('letter-text');

    // Sweet, cursive-friendly updates
    if (letterType === 'miss-me') {
        titleElement.textContent = "When the world misses you";
        textElement.innerHTML = "My darling,<br><br>If you're reading this, I hope your heart feels a tiny pull. I miss you, too. Probably more than words can say. Distance is just a small hurdle in our grand love story. Close your eyes and feel my hug. It's always waiting for you.";
    } else if (letterType === 'we-fight') {
        titleElement.textContent = "When hearts are bruised";
        textElement.innerHTML = "Hey love,<br><br>Take a breath. No matter what we argued about, it’s not as strong as my love for you. It's us against the problem, not us against each other. I'd rather be wrong and holding you, than right and alone. I love you, let's fix it.";
    } else if (letterType === 'youre-sad') {
        titleElement.textContent = "When you need a light";
        textElement.innerHTML = "Hi baby,<br><br>If a shadow is hanging over you, let my love be your sun. You are stronger, softer, and more beautiful than you see. Every storm passes, but what we have is eternal. Don't carry this alone; I'm always cheering you on, right beside you.";
    }
}

// --- Polish tricky "No" Button Interaction ---
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById('no-button');
    if(noButton) {
        noButton.addEventListener('mouseover', function() {
            const container = document.querySelector('.main-wrapper');
            
            // Random positions with better offset to avoid container edges
            const padding = 20;
            const maxX = container.offsetWidth - noButton.offsetWidth - padding * 2; 
            const maxY = container.offsetHeight - noButton.offsetHeight - padding * 2;
            
            const newX = Math.floor(Math.random() * maxX) + padding;
            const newY = Math.floor(Math.random() * maxY) + padding;

            noButton.style.position = 'absolute';
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
            noButton.style.transition = 'all 0.1s ease'; // Fast dodge
        });
    }
});
