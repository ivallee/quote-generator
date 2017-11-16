$( document ).ready(function() {

  var api = 'https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json'
  
  function getQuote() {
    $.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function( data ) {
      
      var quote = "\"" + data.quote + "\"";
      var author = "-" + data.author;

      $('.quote').html(quote);
      $('.author').html(author);
      $('.tweet').attr("href", "https://twitter.com/intent/tweet?text=" + quote + " " + author);
    });
  };

  getQuote();
  
  $('#get-quote').on('click', function() {

    getQuote();

  });

});