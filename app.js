$(document).ready(function(){
  var quote;
  var author;

  function generateQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?',
      dataType: 'jsonp',
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text('“' + quote + '”');
        if(author) {
          $('#author').text('– ' + author);
        } else {
          $('#author').text('– ' + 'unknown');
        }
      }
    });
  }

  generateQuote();

  $('#next-quote').click(function(e){
    e.preventDefault();
    generateQuote();
  });

  $('#tweet-quote').click(function(e){
    e.preventDefault();
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' – ' + author));
  });

});
