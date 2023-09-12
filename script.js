const btn1 = document.querySelector(".btn1");
const btns = document.querySelectorAll('.btn');

const arr = ['Улица', 'Мост', 'Завод', 'Школа', 'Сад', 'Парк', 'Магазин'];


btn1.addEventListener('click', (e) => {
    btn1.classList.toggle('active');
    e.target.textContent === '+' ? e.target.textContent = '- Стадион' : e.target.textContent = '+';
})

console.log(btns);

for(let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', (e) => {
        btns[i].classList.toggle('active');
        e.target.textContent === '+' ? e.target.textContent = `- ${arr[i]}` : e.target.textContent = '+';
    })
}
