// console.log(5);
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote-text');
const authorText=document.getElementById('quote-author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
 let apiQuotes=[];

 function newQuote(){
     const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
     if(quote.author===null){
         quote.author='unknown';
     }
     else{
         authorText.innerHTML=quote.author;
     }
     quoteText.innerHTML=quote.text;

 }

 async function getQuotes(){
     const apiUrl='https://type.fit/api/quotes';
     try{
    const response=await fetch(apiUrl);
    apiQuotes=await response.json();
    console.log(apiQuotes);
    newQuote();
     }
     catch {

     }
 }
 getQuotes();

 function tweetQuote(){
     const twitterUrl='https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}';
     window.open(twitterUrl,'_blank');


 }
 newQuoteBtn.addEventListener('click',newQuote);
 twitterBtn.addEventListener("click",tweetQuote);
