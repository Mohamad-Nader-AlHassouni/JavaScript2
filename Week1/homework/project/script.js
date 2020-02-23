const quotes = [
    {quote:'Happiness is not something ready-made. It comes from your own actions.', author:'Dalai Lama'},
    {quote:'To be happy, we must not be too concerned with others.', author:'Albert Camus'},
    {quote:'Happiness depends upon ourselves.', author:'Aristotle'},
    {quote:'It\'s a helluva start, being able to recognize what makes you happy.', author:'Lucille Ball'},
    {quote:'Happy people plan actions, they don’t plan results.', author:'Dennis Waitley'}
]

const quoteDiv = document.getElementById('quote');
const authorDiv = document.getElementById('author');
const button = document.getElementById('newQuote');

button.addEventListener('click', changeQuote); 

changeQuote();

function changeQuote() {
    let quoteIndex = Math.floor(Math.random()*quotes.length);
    quoteDiv.innerHTML = quotes[quoteIndex].quote
    authorDiv.innerHTML = quotes[quoteIndex].author
}