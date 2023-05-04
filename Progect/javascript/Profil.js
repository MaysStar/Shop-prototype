document.addEventListener('DOMContentLoaded', () => {
// На стороні клієнта

// Отримати доступ до веб-сторінки та вибрати необхідні елементи
const button = document.querySelector('#my-button');

// Додаємо обробник події на кнопку
button.addEventListener('click', () => {
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

// Зберегти дані у масиві
const data = {
  login: loginInput.value,
  password: passwordInput.value,

};
/*console.log(data);*/
const Data = {...data};
console.log(Data);
window.location.href = 'file:///E:/%D0%9F%D1%80%20%D0%BF%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA/Progect2/index.html/index2.html';
// Отримуємо елемент, який потрібно змінити


		
});
});