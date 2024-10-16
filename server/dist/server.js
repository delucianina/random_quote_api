import express from 'express';
const app = express();
// We need a database of quotes 
const quotes = [
    "JavaScript is the duct tape of the Internet. - Charlie Campbell",
    "Any application that can be written in JavaScript, will eventually be written in JavaScript. - Jeff Atwood",
    "JavaScript is the world's most misunderstood programming language. - Douglas Crockford",
    "The strength of JavaScript is that you can do anything. The weakness is that you will. - Reg Braithwaite",
    "JavaScript is the language of the web. - Brendan Eich",
    "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it. - Douglas Crockford",
    "JavaScript is the best programming language. - Douglas Crockford",
    "JavaScript is the most important language on the web. - Brendan Eich",
    "JavaScript is the most misunderstood language in the world. - Douglas Crockford",
    "JavaScript is the most popular programming language in the world. - Brendan Eich",
    "JavaScript is the most powerful language on the web. - Brendan Eich",
    "JavaScript is the most versatile language on the web. - Brendan Eich",
    "JavaScript is the most widely used language on the web. - Brendan Eich",
    "JavaScript is the only language that runs in the browser. - Brendan Eich",
    "JavaScript is the only language that runs on the server and the client. - Brendan Eich"
];
// Random quote route
// When a route sends back an array or an object, it is an API route 
// When a route is an API route, you should prefix the path with '/api' 
app.get('/api/quote', (_, responseObj) => {
    const pullQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomQuote = {
        quote: pullQuote
    };
    responseObj.send(randomQuote);
});
app.get('/', (_, responseObj) => {
    responseObj.send('Hi there');
});
app.get('/data', (_, responseObj) => {
    const data = {
        name: 'Nina',
        age: 31
    };
    responseObj.send(data);
});
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
