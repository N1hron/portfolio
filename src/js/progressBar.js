export default function progressBar() {
    const progressBars = document.querySelectorAll('.skills__progress-fill');
    const percents = document.querySelectorAll('.skills__progress-percentage');

    percents.forEach((percent, i) => {
        progressBars[i].style.width = percent.textContent;
    })
}