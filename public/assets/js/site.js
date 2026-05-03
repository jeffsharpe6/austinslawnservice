document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
    const dotsWrap = carousel.querySelector('.carousel__dots');
    if (!track || slides.length === 0) return;

    let index = 0;
    let intervalId = null;
    let touchStartX = 0;
    let touchStartY = 0;

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

    function handleTouchStart(event) {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      if (intervalId) clearInterval(intervalId);
    }

    function handleTouchEnd(event) {
      const touch = event.changedTouches[0];
      const diffX = touch.clientX - touchStartX;
      const diffY = touch.clientY - touchStartY;
      const swipeThreshold = Math.max(40, carousel.offsetWidth * 0.12);

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        go(diffX < 0 ? 1 : -1);
      }

      restartAuto();
    }

    if (window.matchMedia('(any-pointer: coarse)').matches) {
      carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
      carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
      carousel.addEventListener('touchcancel', restartAuto, { passive: true });
    }

    carousel.addEventListener('mouseenter', () => intervalId && clearInterval(intervalId));
    carousel.addEventListener('mouseleave', restartAuto);

    update();
    restartAuto();
  });
});
