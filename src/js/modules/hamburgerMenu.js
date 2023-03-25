export default function hamburgerMenu(triggerSelector, menuSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);
    const close = document.querySelector(closeSelector);
    const overlay = document.querySelector('.overlay');
    
    trigger.addEventListener('click', (event) => {
        menu.classList.add('sidepanel_active');
        overlay.classList.add('overlay_active');
        document.body.style.overflow = 'hidden';
    })

    close.addEventListener('click', (event) => {
        menu.classList.remove('sidepanel_active');
        overlay.classList.remove('overlay_active');
        document.body.style.overflow = 'auto';
    })
}