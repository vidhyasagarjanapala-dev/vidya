
    const input = document.getElementById('nameInput');
    const card = document.getElementById('card');
    const greeting = document.getElementById('greeting');
    const nameInputContainer = document.getElementById('nameInputContainer');
    const music = document.getElementById('birthdayMusic');

    // Heart bloom container
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = (Math.random() * 80 + 10) + '%';
      heart.style.animationDuration = (3 + Math.random() * 2) + 's';
      heart.style.fontSize = (18 + Math.random() * 24) + 'px';
      heart.textContent = '❤️';
      document.body.appendChild(heart);

      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }

    // Star sprinkle container
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = (Math.random() * 100) + '%';
      star.style.top = (Math.random() * 40) + '%';
      star.style.animationDuration = (2 + Math.random() * 3) + 's';
      star.textContent = '⭐';
      document.body.appendChild(star);

      // Remove star after 5s and recreate to keep sprinkling effect
      setTimeout(() => {
        star.remove();
        createStar();
      }, 5000);
    }

    let heartInterval, starInterval;

    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const name = input.value.trim();
        if (name !== '') {
          greeting.textContent = `Happy Birthday, ${name}! 🎉`;
          nameInputContainer.style.display = 'none';
          card.style.display = 'block';
          music.play();

          // Start heart blooms every 400ms
          heartInterval = setInterval(createHeart, 400);

          // Start stars sprinkle every 600ms (create multiple stars)
          for(let i=0; i<10; i++) {
            setTimeout(createStar, i * 600);
          }
          starInterval = setInterval(createStar, 600);
        }
      }
    });
