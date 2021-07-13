var colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#f1c40f','#e67e22','#e74c3c','#d35400','#f39c12','#55efc4','#81ecec','#74b9ff','#ffeaa7','#fd79a8','#704E2E','#CDE77F','#79745C','#247BA0']

var main = document.getElementById('main');
var button = document.getElementById('btn');
var h1 = document.getElementById('colorCode');

main.style.backgroundColor = '';

button.onclick=function(){
  var randomIndex = Math.floor(Math.random()*colors.length);
  var randomCode = colors[randomIndex];
  h1.innerText = `HEX COLOR : ${randomCode}`
  main.style.backgroundColor = randomCode;
}