import './style.css'

const quoteBtn = document.querySelector('#quote-btn');

//Make an http GET request to our Express server route "/api/quote" and get back a quote
async function getQuote() {
  const resObj = await fetch('/api/quote');
  // needs to be json to parse 
  const data = await resObj.json();

  console.log(data);
}

getQuote();

quoteBtn?.addEventListener('click', getQuote);