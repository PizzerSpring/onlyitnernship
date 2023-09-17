//const btn1 = document.querySelector(".btn1");
const btns = document.querySelectorAll('.btn');
const plus = document.querySelector('.plus');
const text = document.querySelector('.text');

const city = ['Стадион', 'Мост', 'Завод', 'Школа', 'Сад', 'Парк', 'Магазин', 'Въезд', 'Здание', 'Река'];

const green = '#6ABF4B';

console.log(btns);

for(let i = 0; i < btns.length; i = i + 3) {
    btns[i].style.backgroundColor = green;
}

for(let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', (e) => {
        btns[i].classList.toggle('active');
        plus.classList.toggle('plus-active');
        text.textContent === '' ?  text.textContent = `${city[i]}` : text.textContent = '';
    })
}
