const openNav = document.querySelector('#open_nav')
const closeNav = document.querySelector("#close_nav")
const nav = document.querySelector('.header_list')

openNav.addEventListener('click', () => {
    
    nav.style.transform = 'translateX(0px)';

})

closeNav.addEventListener('click', () => {
    
    nav.style.transform = 'translateX(100px)';

})