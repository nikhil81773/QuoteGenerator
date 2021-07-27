
/*
//local machine then no use of the fetch calls
function newQuote(){
    //pick a random number
    const quote=localQuotes[Math.floor(Math.random()*localQuotes.length)];
    console.log(quote);
        
}
newQuote();
*/ 
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
let apiQuotes=[];
// get quotes from api
function newQuote(){
    //pick a random number
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // if author feild is balnk replace it with unknown

    if(quote.author===null){
        quote.author="Unknown";
    }
    else{
        authorText.textContent=quote.author;
    }
    // check out for the quote length if it is greater
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
  
   
   quoteText.textContent=quote.text;
        
}
async function getQuotes(){
    
const  apiUrl='https://type.fit/api/quotes';

try{
    
const response=await fetch(apiUrl);

apiQuotes=await response.json();

newQuote();
// console.log(apiQuotes[12]);
}
catch (error){

}
}


//tweet button
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');

}
//Event listneres
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

getQuotes();
