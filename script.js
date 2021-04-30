let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let values = [
    '😃', '😁', '🤣', '😇', '😛', '🤪', '🤩', '😎', '😭', '🥺', '😱', '😈', '👽', '🎃', '👌', '🙋‍♂️', '🧚🏻',
    '🙉', '🐶', '🦋', '🍕', '🏀', '🐧'
];

let inp_spd = document.getElementById("spd");

function getRandomValue() {
    return values[parseInt(Math.random()*values.length)];
}

setInterval(()=>{
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
}, 200);

let animation_id;
function updateAnimation(new_time) {
    if(animation_id) clearInterval(animation_id);

    animation_id = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    }, new_time*1000);
}

inp_spd.onchange = function(e) {
    console.log("value changed", e.target.value);

    document.documentElement.style.setProperty('--speed', e.target.value);
    let new_time = (6-e.target.value)*0.1;
    updateAnimation(new_time);
}