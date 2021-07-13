const counter = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/Ravindra/queryravindra.com/?amount=1')
        .then(res => res.json())
        .then(res => {
            counter.innerHTML = res.value;
        });
}