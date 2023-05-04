let button = document.querySelector('body'); // отримуємо посилання на кнопку

let intervalId = setInterval(() => {
  button.classList.toggle('color-change-active'); // змінюємо клас для активації/деактивації анімації
}, 20000); // змінюємо кожні 5 секунд

button.addEventListener('mouseenter', () => {
  clearInterval(intervalId); // зупиняємо анімацію при наведенні курсора на кнопку
});

button.addEventListener('mouseleave', () => {
  intervalId = setInterval(() => {
    button.classList.toggle('color-change-active');
  }, 20000); // відновлюємо анімацію при відведенні курсора від кнопки
});

