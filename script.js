 
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      navbar.classList.toggle('active');
      menuIcon.name = navbar.classList.contains('active') ? 'close-outline' : 'menu-outline';
    };

    const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    body.className = savedTheme;
    themeBtn.name = savedTheme === "light" ? "moon-outline" : "sunny-outline";
}

// Toggle theme
themeBtn.onclick = () => {
    if(body.classList.contains('dark')){
        body.classList.replace('dark','light');
        themeBtn.name = "moon-outline";
        localStorage.setItem("theme","light");
    } else {
        body.classList.replace('light','dark');
        themeBtn.name = "sunny-outline";
        localStorage.setItem("theme","dark");
    }

    
};