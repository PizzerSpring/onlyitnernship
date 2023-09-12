const btn = document.querySelector(".btn");


btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
    e.target.textContent === '+' ? e.target.textContent = '- Стадион' : e.target.textContent = '+';
})
