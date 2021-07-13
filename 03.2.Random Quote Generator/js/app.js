const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

var h1 = document.getElementById('quote');
var blockquote= document.getElementById('author');

function generate(){
  fetch(url).then(res=>res.json())
      .then(data=>{
          var totalQuotes = data.quotes.length;
          var randomIndex = Math.floor(Math.random()*totalQuotes);
          h1.innerHTML = `<i class="fas fa-quote-left mr-3"></i>${data.quotes[randomIndex].quote}`;
          blockquote.innerHTML = `- ${data.quotes[randomIndex].author}`;
      })
}