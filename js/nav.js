const navIcon = document.querySelector('#nav_icon')
const nav = document.querySelector('.header_list')

navIcon.addEventListener('click', () => {
    
    nav.classList.toggle('show_menu')

    let icon = navIcon.getAttribute('name')

    if( icon === 'menu-outline' ) {

        navIcon.setAttribute('name', 'close-outline')

    } else {
        
        navIcon.setAttribute('name', 'menu-outline')
    }

})