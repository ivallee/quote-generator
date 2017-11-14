$( document ).ready(function() {
  
  function getQuote() {
    $.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function( data ) {
      
      var quote = "\"" + data.quote + "\"";
      var author = "-" + data.author;

      $('.quote').html(quote);
      $('.author').html(author);

    });
  };

  getQuote();
  
  $('#get-quote').on('click', function() {

    getQuote();

  });
  
  $('#tweet').on('click', function() {
    console.log('twit!');
  });
  
});