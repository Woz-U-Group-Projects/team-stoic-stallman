const view = document.querySelector('.view'),
    mat = document.querySelector('.mat'),
    els = Array.from(mat.querySelectorAll('a')),
    debug = false;

let i = 0,
    flipTimeout;

function flip(e) {
    const el = els[i],
        style = getComputedStyle(el),
        x = style.getPropertyValue('--x'),
        y = style.getPropertyValue('--y'),
        z = style.getPropertyValue('--z'),
        angle = style.getPropertyValue('--a'),
        a = -parseFloat(angle);

    mat.style.transform = `rotate3d(${x}, ${y}, ${z}, ${a}deg)`;

    for (const [j, el] of els.entries()) {
        el.classList.toggle('visible', j == i);
    }

    if (typeof e !== 'undefined' && e.type === 'wheel') {
        if (debug) console.log(`---------------------------------`);
        if (e.deltaY < 0) {
            if (debug) console.log(`Scrolling up, i = ${i}`);
            i = (i + els.length - 1) % els.length;
            if (debug) console.log(`Set i = ${i}.`);
        } else if (e.deltaY > 0) {
            if (debug) console.log(`Scrolling down, i = ${i}`);
            i = (i + 1) % els.length;
            if (debug) console.log(`Set i = ${i}`)
        }
        if (debug) console.log(`---------------------------------`);
    } else {
        i = (i + 1) % els.length;
    }

    if (flipTimeout) clearTimeout(flipTimeout);
    flipTimeout = setTimeout(flip, 2750);
};


function actThenThrottleEvents(listener, delay) {
    var timeout;
    return function(e) {
        if (!timeout) {
            listener(e);
            timeout = setTimeout(function() { timeout = null }, delay);
        }
    }
}

window.addEventListener('load', flip);

window.addEventListener('wheel', actThenThrottleEvents(flip, 950));