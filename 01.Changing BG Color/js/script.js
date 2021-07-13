var colors = ['red','pink','yellow','blue','orange','green','brown','cyan','purple','coral','darkcyan','yellogreen','wheat','violet','tomato','teal','skyblue','salmon'];


// variables
var main = document.getElementById('main');
var button = document.getElementById('btn');

main.style.backgroundColor = 'tomato'

button.onclick=function(){
  var randomIndex = Math.floor(Math.random()*colors.length);
  var randomColor = colors[randomIndex];
  main.style.backgroundColor = randomColor;
}