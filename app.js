$(document).ready(function(){
  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: 'https://quotes.stormconsultancy.co.uk/random.json',
      dataType: 'json',
      success: function(response) {
        console.log('success', response.quote);
        quote = response.quote;
        author = response.author;
        $('#quote').text('“' + quote + '”');
        if(author) {
          $('#author').text('– ' + author);
        } else {
          $('#author').text('– ' + 'unknown');
        }
      }
    });
  }

  getNewQuote();

  $('#next-quote').click(function(e){
    e.preventDefault();
    getNewQuote();
  });

  $('#tweet-quote').click(function(e){
    e.preventDefault();
    console.log('Tweet me');
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' – ' + author));
  });

});
