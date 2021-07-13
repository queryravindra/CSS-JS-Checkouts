const text = document.getElementById('text');
const newText = 'I Love To Code Every Day!';
let count = 1;

setInterval(writeText, 100);

function writeText() {
    text.innerText = newText.slice(0, count);

    count++;

    if(count > newText.length) {
        count = 1;
    }
}