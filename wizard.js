window.onload = function() {
    const gif1 = document.getElementById('gif1');
    // const gif2 = document.getElementById('gif2');
    // const gif3 = document.getElementById('gif3');

    let offsetX, offsetY;

    function randomPosition(gif) {
        const maxX = window.innerWidth - gif.width;
        const maxY = window.innerHeight - gif.height;
        offsetX = Math.floor(Math.random() * maxX);
        offsetY = Math.floor(Math.random() * maxY);
        gif.style.left = offsetX + 'px';
        gif.style.top = offsetY + 'px';
    }

    randomPosition(gif1);
    // randomPosition(gif2);
    // randomPosition(gif3);

    function flyToPosition(event) {
        const x = event.clientX - gif1.width / 2;
        const y = event.clientY - gif1.height / 2;

        gif1.style.transition = "left 1s, top 1s";
        gif1.style.left = x + "px";
        gif1.style.top = y + "px";

    }

    document.addEventListener('click', flyToPosition);

};
