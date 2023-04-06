export default function fixSidepanelHeight() {
    const sidepanel = document.querySelector('.sidepanel');
    setHeight();
    window.addEventListener('resize', () => {
        setHeight();
    })

    function setHeight() {
        const height = window.innerHeight;
        sidepanel.style.height = height + 'px';
    }
}