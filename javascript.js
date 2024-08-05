var quotes = [
    'Test quote 1 - Test Author',
    'Test quote 2 - Test Author',
    'Test quote 3 - Test Author',
    'Test quote 4 - Test Author',
    'Test quote 5 - Test Author',
    'Test quote 6 - Test Author',
    'Test quote 7 - Test Author',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}