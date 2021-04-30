let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let values = [
    '😃', '😁', '🤣', '😇', '😛', '🤪', '🤩', '😎', '😭', '🥺', '😱', '😈', '👽', '🎃', '👌', '🙋‍♂️', '🧚🏻',
    '🙉', '🐶', '🦋', '🍕', '🏀', '🐧'
];

function getRandomValue() {
    return values[parseInt(Math.random()*values.length)];
}

setInterval(()=>{
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
}, 200);