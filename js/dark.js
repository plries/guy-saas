// moon -> toggles dark mode; default
let toggleoff = document.querySelector('#dark');
// sun -> toggles light mode
let toggleon = document.querySelector('#light');
// gets all notifications to change image
let notifs = document.querySelectorAll('.notif');
// get mode from local storage
let mode = localStorage.getItem("mode");

// updates the theme of the website
function updateMode(mode) {
    // if the mode is dark mode
    if (mode === 'darkmode') {
        // set mode to dark in local storage
        localStorage.setItem('mode', 'darkmode');
        // show the light button
        toggleoff.style.display = 'none';
        toggleon.style.display = 'block';
        // add the dark class to the body
        document.body.classList.add("darkmode");
        // remove the light class from the body
        document.body.classList.remove('lightmode');
        // change the notifications to the dark version
        notifs[0].src = '../media/hero-notif-dark.png';
        notifs[1].src = '../media/friends-notif-dark.png';
    } else {
        // set mode to light in local storage
        localStorage.setItem('mode', 'lightmode');
        // show the dark button
        toggleoff.style.display = 'block';
        toggleon.style.display = 'none';
        // remove the dark class from the body
        document.body.classList.remove("darkmode");
        // add the light class to the body
        document.body.classList.add('lightmode');
        // change the notifications to the light version
        notifs[0].src = '../media/hero-notif-light.png';
        notifs[1].src = '../media/friends-notif-light.png';
    }
}

// updates the mode when either toggle button is clicked
toggleon.addEventListener('click', function () {
    updateMode('lightmode');
});

toggleoff.addEventListener('click', function () {
    updateMode('darkmode');
});

// updates the mode if the mode is in local storage
if (mode === 'darkmode') {
    updateMode('darkmode');
} else if (mode === 'lightmode'){
    updateMode('lightmode');
}else(updateMode('lightmode'))