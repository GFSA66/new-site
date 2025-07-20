// document.addEventListener('DOMContentLoaded', (event) => {
//     const htmlElement = document.documentElement;
//     const switchElement = document.querySelectorAll('darkModeSwitch');
//     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     const currentTheme = localStorage.getItem('bsTheme') || (prefersDarkScheme ? 'dark' : 'light');

//     htmlElement.setAttribute('data-bs-theme', currentTheme);
//     switchElement.checked = currentTheme === 'dark';

//     switchElement.addEventListener('change', function () {
//         const newTheme = this.checked ? 'dark' : 'light';
//         htmlElement.setAttribute('data-bs-theme', newTheme);
//         localStorage.setItem('bsTheme', newTheme);
//     });

//     // Tooltip aktivieren
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const switchElements = document.querySelectorAll('.darkModeSwitch');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('bsTheme') || (prefersDarkScheme ? 'dark' : 'light');

    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElements.forEach(el => {
        el.checked = currentTheme === 'dark';
    });

    switchElements.forEach(el => {
        el.addEventListener('change', function() {
            const newTheme = this.checked ? 'dark' : 'light';
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('bsTheme', newTheme);
            // Синхронізуємо всі тумблери
            switchElements.forEach(otherEl => {
                if (otherEl !== this) otherEl.checked = this.checked;
            });
        });
    });
});