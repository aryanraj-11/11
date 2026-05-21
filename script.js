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
    if (letterType === 'Your Initiative, My Happiness') {
        titleElement.textContent = "When u Takes The Initiative";
        textElement.innerHTML = "My darling,<br><br>Looking at this, I can still hear you telling me to come sit close to you. It’s my favorite thing , how you always make space for me in your world. That moment on the hill was perfect, not just because of the view, but because you wanted to share it so closely with me.";
    } else if (letterType === 'U Just Want To Smile') {
        titleElement.textContent = "My Favorite View 👀";
        textElement.innerHTML = "Hey love,<br><br>Did you know that your smile is my absolute favorite thing in the whole world? Just picturing it right now is making me smile.You bring so much light and joy into my life effortlessly. I hope this tiny message brings a little bit of that light back to your beautiful face today. Keep shining, gorgeous.";
    } else if (letterType === 'youre-sad') {
        titleElement.textContent = "Sending You Our Special Hug 🤗";
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
