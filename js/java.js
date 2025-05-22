document.addEventListener('DOMContentLoaded', function() {
    const cyberToggler = document.querySelector('.cyber-toggler');
    
    cyberToggler.addEventListener('click', function() {
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
        }, 1000);
    });
    
    const terminalLines = [
        "> SYSTEM SCAN COMPLETE",
        "> COSMIC ANOMALIES DETECTED",
        "> ACCESSING STELLAR DATABASE...",
        "> WELCOME TO THE COSMOS"
    ];
    
    const terminalBody = document.querySelector('.terminal-body');
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeTerminal() {
        const line = terminalLines[currentLine];
        
        if (isDeleting) {
            terminalBody.lastElementChild.textContent = line.substring(0, currentChar - 1);
            currentChar--;
            typingSpeed = 50;
        } else {
            terminalBody.lastElementChild.textContent = line.substring(0, currentChar + 1);
            currentChar++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentChar === line.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentLine = (currentLine + 1) % terminalLines.length;
            if (currentLine === 0) {
                terminalBody.innerHTML = '<p>> INITIALIZING DESTINY INTERFACE...</p><p>> LOADING COSMIC DATABASE...</p><p class="blink">> WELCOME, EXPLORER [READY]</p>';
                return;
            }
            const newLine = document.createElement('p');
            newLine.textContent = '>';
            terminalBody.appendChild(newLine);
        }
        
        setTimeout(typeTerminal, typingSpeed);
    }
    
    setTimeout(typeTerminal, 2000);
    
    const navbarBrand = document.querySelector('.navbar-brand');
    
    navbarBrand.addEventListener('mouseenter', function() {
        this.classList.add('glitch-active');
    });
    
    navbarBrand.addEventListener('mouseleave', function() {
        this.classList.remove('glitch-active');
    });
    
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});










document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cosmic-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.cosmic-card-inner').classList.toggle('is-flipped');
        });
    });
    
    const cosmicTitle = document.querySelector('.cosmic-title');
    if (cosmicTitle) {
        const originalText = cosmicTitle.textContent;
        cosmicTitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                cosmicTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
    
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.stars').style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
        document.querySelector('.stars2').style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
        document.querySelector('.stars3').style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
    });
    
    setInterval(() => {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        randomCard.style.boxShadow = `0 0 20px 5px rgba(0, 209, 255, 0.5)`;
        
        setTimeout(() => {
            randomCard.style.boxShadow = '';
        }, 1000);
    }, 3000);
});