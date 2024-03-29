export default function hamburgerMenu(triggerSelector, menuSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);
    const close = document.querySelector(closeSelector);
    const overlay = document.querySelector('.overlay');
    const buttons = menu.querySelectorAll("li a");

    function onClose() {
        menu.classList.remove('sidepanel_active');
        overlay.classList.remove('overlay_active');
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'hidden';
    }
    
    trigger.addEventListener('click', (event) => {
        menu.classList.add('sidepanel_active');
        overlay.style.transition = 'opacity 0.5s, visibility 0.5s';
        overlay.classList.add('overlay_active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    })

    close.addEventListener('click', () => onClose());

    buttons.forEach(btn => {
        btn.addEventListener('click', () => onClose());
    })
}