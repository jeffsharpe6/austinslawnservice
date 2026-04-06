document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
    const prev = carousel.querySelector('.carousel__button--prev');
    const next = carousel.querySelector('.carousel__button--next');
    const dotsWrap = carousel.querySelector('.carousel__dots');
    if (!track || slides.length === 0) return;

    let index = 0;
    let intervalId = null;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        index = i;
        update();
        restartAuto();
      });
      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll('.carousel__dot'));

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }

    function go(direction) {
      index = (index + direction + slides.length) % slides.length;
      update();
    }

    function restartAuto() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => go(1), 4500);
    }

    prev?.addEventListener('click', () => {
      go(-1);
      restartAuto();
    });

    next?.addEventListener('click', () => {
      go(1);
      restartAuto();
    });

    carousel.addEventListener('mouseenter', () => intervalId && clearInterval(intervalId));
    carousel.addEventListener('mouseleave', restartAuto);

    update();
    restartAuto();
  });
});
