/* ==========================================================================
   THEME SWITCHER PERSISTENCE CONTROLLER (theme-switcher.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.theme-toggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-version');
            const mode = document.body.classList.contains('dark-version') ? 'dark' : 'light';
            localStorage.setItem('theme', mode);
        });
    }
});