
// Makes list elements from Nav transition based on count inside the list
document.addEventListener('DOMContentLoaded', () => {
    const STEP = 0.02;
    document.querySelectorAll('ul li').forEach((li, i) => {
        li.style.transitionDelay = `${i * STEP}s`;
    });
});