// Получаем все кнопки
const btns = document.querySelectorAll('.btn');
// Храним надписи
const city = ['Школа', 'Мост', 'Завод', 'Стадион', 'Сад', 'Парк', 'Магазин', 'Въезд', 'Здание', 'Река'];
// Храним расположение конопок
const t = ['35%', '15%', '20%', '40%', '40%', '60%', '65%', '65%', '70%', '79%'];
const l = ['60%', '70%', '30%', '35%', '73%', '56%', '67%', '24%', '83%', '58%'];

const green = '#6ABF4B';
// Красим кнопки разными цветами
for(let i = 0; i < btns.length; i += 3) {
    btns[i].style.backgroundColor = green;
}
// Размещаем кнопки на странице
for(let i = 0; i < btns.length; i++) {
    btns[i].style.top = t[i];
    btns[i].style.left = l[i];
}
// Основной функционал активности кнопок
for(let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', (e) => {
        btns[i].classList.toggle('active');
        btns[i].lastElementChild.firstElementChild.classList.toggle('plus-active');
        btns[i].firstElementChild.textContent === '' ?  btns[i].firstElementChild.textContent = `${city[i]}` : btns[i].firstElementChild.textContent = '';
    })
}
