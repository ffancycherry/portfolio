//Кастомный курсор
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

//Обработка движения 
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

//Реакция на интерактивные элементы
const interactiveElements = ['a', 'button', 'input', '.interactive'];
interactiveElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
});

//Меню бургер
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});