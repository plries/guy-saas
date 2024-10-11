let toggleoff = document.querySelector('#dark');
let toggleon = document.querySelector('#light');
let notifs = document.querySelectorAll('.notif');
let mode = localStorage.getItem("mode");

function updateMode(mode) {
if (mode === 'darkmode') {
    localStorage.setItem('mode', 'darkmode');
    toggleoff.style.display = 'none';
    toggleon.style.display = 'block';
    document.body.classList.add("darkmode");
    document.body.classList.remove('lightmode');
    notifs[0].src = '../media/hero-notif-dark.png';
    notifs[1].src = '../media/friends-notif-dark.png';
} else {
    localStorage.setItem('mode', 'lightmode');
    toggleoff.style.display = 'block';
    toggleon.style.display = 'none';
    document.body.classList.remove("darkmode");
    document.body.classList.add('lightmode');
    notifs[0].src = '../media/hero-notif-light.png';
    notifs[1].src = '../media/friends-notif-light.png';
}
}

toggleon.addEventListener('click', function () {
    updateMode('lightmode');
});

toggleoff.addEventListener('click', function () {
    updateMode('darkmode');
});


if (mode === 'darkmode') {
    updateMode('darkmode');
} else if (mode === 'lightmode'){
    updateMode('lightmode');
}else(updateMode('lightmode'))