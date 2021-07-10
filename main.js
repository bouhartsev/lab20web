function onEsc(e){
    if(e.key === "Escape") {
        toggleModel();
    }
}

function toggleModel() {
    document.documentElement.style.setProperty("--top-scroll", document.documentElement.scrollTop+'px');
    document.querySelector('#popup').setAttribute('data-visibility', (document.querySelector('#popup').getAttribute('data-visibility')==='false'));
    let isOn = document.body.classList.toggle('overflow-hidden');

    if (isOn) document.body.addEventListener('keyup', onEsc);
    else {
        document.body.removeEventListener('keyup', onEsc);
    }

    return 0;
}

function toggleLamp() {
    let isOn = document.querySelector('.lamp__container').classList.toggle('on');
    document.querySelector('.btn__text').innerHTML = (isOn) ? 'on' : 'off';

    return 0;
}

window.onload = function(){
    for(let i = 1; i <= 12; i++) { 
        let el = document.createElementNS('http://www.w3.org/2000/svg', 'line'); 
        el.setAttribute('x1', '100'); 
        el.setAttribute('y1', '30'); 
        el.setAttribute('x2', '100'); 
        el.setAttribute('y2', '40'); 
        el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)'); 
        el.setAttribute('style', 'stroke: #ffffff;'); 
        document.querySelector('#clock').appendChild(el); 
    }

    let time_text = document.getElementById("time_text");
    let clock_hour = document.getElementById("hourhand");
    let clock_minute = document.getElementById("minutehand");
    let clock_second = document.getElementById("secondhand");

    window.setInterval(function(){
        let now = new Date();
        time_text.innerHTML = now.toLocaleTimeString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // o'clock variant
        // clock_hour.setAttribute('transform', 'rotate(' + (hours*360/12) + ' 100 100)');
        // clock_minute.setAttribute('transform', 'rotate(' + (minutes*6) + ' 100 100)');
        // clock_second.setAttribute('transform', 'rotate(' + (seconds*6) + ' 100 100)');
        
        //real clock variant
        let time = hours*3600 + minutes*60 + seconds;
        clock_hour.setAttribute('transform', 'rotate(' + (time/120) + ' 100 100)');
        clock_minute.setAttribute('transform', 'rotate(' + (time/10) + ' 100 100)');
        clock_second.setAttribute('transform', 'rotate(' + (time*6) + ' 100 100)');

    }, 1000);

    document.querySelector('#btnModalOpen').onclick = toggleModel;
    document.querySelector('#btnModalClose').onclick = toggleModel;
}
