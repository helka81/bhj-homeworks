const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    revealElements.forEach(item => {
        const rect = item.getBoundingClientRect();
        item.classList.remove('reveal_active');
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            item.classList.add('reveal_active');
        };
    });
});