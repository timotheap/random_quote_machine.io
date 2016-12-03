
 $(document).ready(function(){
    
	$('#getQuote').on('click', function(){

//function loadQuote(){
	
	
	var $mybutton = $('#getQuote');
	var $myQuote = $('#myquote');
	var $author = $('#author');
	
	
	$mybutton.text('Get another quote!');

	var quoteUrl = 'http://quotes.stormconsultancy.co.uk/random.json'
	$.getJSON(quoteUrl, function(data){
				
		console.log(data);
		
			var quote = data.quote;
			var myauthor = data.author;
			$myQuote.append('<p>' + quote + '<p>' );
			$author.append('<p>' + myauthor + '<p>');
			
		});
		
	$myQuote.text("");
	$author.text("");
});
 });

 
 
 
 
//$('#getQuote').on('click', loadQuote());
