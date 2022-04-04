
/// Hamburger/Nav 
window.onload = function hamburger() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const logo = document.querySelector('.whiteLogo');
    const about_btn = document.querySelector('.aboutTag');
    const skill_btn = document.querySelector('.skillTag');
    const work_btn = document.querySelector('.workTag');
    const contact_btn = document.querySelector('.contactTag');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        logo.classList.toggle('is-active');
    })

    about_btn.addEventListener('click' , function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        logo.classList.toggle('is-active');
    })
    skill_btn.addEventListener('click' , function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        logo.classList.toggle('is-active');
    })
    work_btn.addEventListener('click' , function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        logo.classList.toggle('is-active');
    })
    contact_btn.addEventListener('click' , function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        logo.classList.toggle('is-active');
    })
}
