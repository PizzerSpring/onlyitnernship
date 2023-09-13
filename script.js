//const btn1 = document.querySelector(".btn1");
const btns = document.querySelectorAll('.btn');

const city = ['Улица', 'Мост', 'Завод', 'Школа', 'Сад', 'Парк', 'Магазин', 'Въезд', 'Здание', 'Река'];

const green = '#6ABF4B';
const blue = '#3877EE';
/*btn1.addEventListener('click', (e) => {
    btn1.classList.toggle('active');
    e.target.textContent === '+' ? e.target.textContent = '- Стадион' : e.target.textContent = '+';
})*/

console.log(btns);

for(let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', (e) => {
        btns[i].classList.toggle('active');
        e.target.textContent === '+' ? e.target.textContent = `- ${city[i]}` : e.target.textContent = '+';
    })
}
