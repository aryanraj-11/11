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
    
    // 1. Add this new line to grab the image element from your HTML
    const imageElement = document.getElementById('letter-image');

    // Hide the image by default (so envelopes without photos don't show a broken icon)
    if (imageElement) {
        imageElement.style.display = 'none';
    }

    // Sweet, cursive-friendly updates
    if (letterType === 'Your Initiative, My Happiness') {
        titleElement.textContent = "When u Takes The Initiative";
        
        // 2. Add the photo for this specific envelope
        imageElement.src = "1000319138.jpg"; 
        imageElement.style.display = "block";
        
        // 3. Your notes are still right here!
        textElement.innerHTML = "My darling,<br><br>Looking at this, I can still hear you telling me to come sit close to you. It's my favorite thing, how you always make space for me in your world. That moment on the hill was perfect, not just because of the view, but because you wanted to share it so closely with me.";
    
    } else if (letterType === 'U Just Want To Smile') {
        titleElement.textContent = "My Favorite View 🥺";
        
        // Add a photo here if you want one!
        // imageElement.src = "your-smile-photo.jpg"; 
        // imageElement.style.display = "block";
        
        textElement.innerHTML = "Hey love,<br><br>Did you know that your smile is my absolute favorite thing in the whole world? Just picturing it right now is making me smile. Keep shining, gorgeous.";
    
    } else if (letterType === 'You Need A Virtual Hug') {
        titleElement.textContent = "Sending You Our Special Hug 🤗";
        
        // Add the hugging photo here
        imageElement.src = "1000319105.jpg"; 
        imageElement.style.display = "block";
        
        textElement.innerHTML = "Hi baby,<br><br>I wish I could be there right now to pull you close, just like that very first time I held you tight and spun you around. Remember that moment? The whole world just blurred out, and it was only you in my arms.<br><br>Close your eyes and feel this hug. I'm right here.";
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
