oper
const burgerBtnEl = document.querySelector("#burger-btn");
const menuEl = document.querySelector("#mobile-menu");

burgerBtnEl.addEventListener('click', () => {
    if(menuEl.classList.contains('hidden')) {
        menuEl.classList.remove('hidden');
    }
    else {
        menuEl.classList.add('hidden');
    }
})