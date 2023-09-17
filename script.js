//const btn1 = document.querySelector(".btn1");
const btns = document.querySelectorAll('.btn');

const city = ['Стадион', 'Мост', 'Завод', 'Школа', 'Сад', 'Парк', 'Магазин', 'Въезд', 'Здание', 'Река'];

const t = ['35%', '15%', '20%', '40%', '40%', '60%', '65%', '65%', '70%', '79%'];
const l = ['60%', '70%', '30%', '35%', '73%', '56%', '67%', '24%', '83%', '58%'];

const green = '#6ABF4B';

console.log(btns);

for(let i = 0; i < btns.length; i = i + 3) {
    btns[i].style.backgroundColor = green;
}

for(let i = 0; i < btns.length; i++) {
    btns[i].style.top = t[i];
    btns[i].style.left = l[i];
}

for(let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', (e) => {
        btns[i].classList.toggle('active');
        btns[i].lastElementChild.firstElementChild.classList.toggle('plus-active');
        btns[i].firstElementChild.textContent === '' ?  btns[i].firstElementChild.textContent = `${city[i]}` : btns[i].firstElementChild.textContent = '';
    })
}
