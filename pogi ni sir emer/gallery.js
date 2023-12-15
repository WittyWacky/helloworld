const words = ['Gallery', ''];
  let i = 0;
  let j = 0;
  let typingInterval;
  const typing = document.getElementById('typing');
  
  function startTyping() {
    typingInterval = setInterval(() => {
      if (j < words[i].length) {
        typing.innerHTML += words[i].charAt(j);
        j++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          i = (i + 1) % words.length;
          j = 0;
          typingInterval = setInterval(() => {
            if (j < words[i].length) {
              typing.innerHTML = words[i].substring(0, j + 1);
              j++;
            } else {
              clearInterval(typingInterval);
              setTimeout(() => {
                startTyping();
              }, 1000);
            }
          }, 100);
        }, 1000);
      }
    }, 100);
  }
  
  startTyping();

  const images = document.querySelectorAll('.gallery img');

  images.forEach((image) => {
    image.classList.add('scroll');
    setTimeout(() => {
      image.classList.add('show');
    }, 100);
  });
  
  
  