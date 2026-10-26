const slideshow = document.querySelector('.slideshow');

if (slideshow) {
    const photos = [...slideshow.querySelectorAll('img')];
    let current = 0;
    let timer;

    function updateRotation() {
        window.clearInterval(timer);
        if (!document.hidden && photos.length > 1) {
            timer = window.setInterval(() => {
                photos[current].hidden = true;
                current = (current + 1) % photos.length;
                photos[current].hidden = false;
            }, 5000);
        }
    }

    document.addEventListener('visibilitychange', updateRotation);
    updateRotation();
}
