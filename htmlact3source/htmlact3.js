const floatingImage = document.getElementById('floating-image');

function updateImagePosition(event) {
    const x = event.clientX;
    const y = event.clientY;
    floatingImage.style.left = x + 'px';
    floatingImage.style.top = y + 'px';
}

function generateRandomText() {
    const texts = ['hapapa', 'hapa', 'pa', 'papa'];
    const randomIndex = Math.floor(Math.random() * texts.length);
    const randomText = texts[randomIndex];

    const textElement = document.createElement('div');
    textElement.classList.add('random-text');
    textElement.textContent = randomText;
    
    const x = parseFloat(floatingImage.style.left) + floatingImage.offsetWidth + Math.random() * 50;
    const y = parseFloat(floatingImage.style.top) - Math.random() * 50;
    
    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';
    
    document.body.appendChild(textElement);
    
    setTimeout(() => {
        textElement.remove();
    }, 3000);
}

document.addEventListener('mousemove', updateImagePosition);

setInterval(generateRandomText, 3000);