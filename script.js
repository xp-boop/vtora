const toggleBtn = document.getElementById('sizeToggle');
let isLarge = false;

toggleBtn.addEventListener('click', () => {
    isLarge = !isLarge;
    document.body.style.fontSize = isLarge ? '20px' : '16px';
});