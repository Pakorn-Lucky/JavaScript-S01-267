function createQuote(quote, callback) {
    let myQuote = "Like i always say, " + quote;
    callback(myQuote);
}

function logQuote(quote){
    console.log(quote + ' Yes...');

}
createQuote(" you will getting better!", logQuote);
