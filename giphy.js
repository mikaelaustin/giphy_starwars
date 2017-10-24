//key J4at5R03BVuTbFfInMZiyodLfltOicVz

$(document).ready(function(){
	$('#giphy-button').on('click', function(){
		$('.giphypic').remove();
		var giphyInput = $('#giphy-input').val().toLowerCase().split(" ").join("+");
		var giphyDiv = $('<div>');
		giphyDiv.addClass('giphypic');


		$.ajax({
			type: 'GET',
			url: "http://api.giphy.com/v1/gifs/search?q=" +  giphyInput +'&api_key=J4at5R03BVuTbFfInMZiyodLfltOicVz',

			success: function(response){
				var giphyImg = $('<img>',{
					src: response.data[0].images.fixed_height.url;
				});
				giphyDiv.append(giphyImg)
				$('#giphy-results').append(giphyDiv);
			}
		})
		$.ajax({
			type: 'GET',
			url: 'https://swapi.co/api/people/',
			success: function(res){
				var starWarsDiv = $('<div>')
				res.results.forEach((char)=>{
					if(char.name.toLowerCase() === giphyInput.split("+").join(" ").toLowerCase()){
						var name = $('<p>')
						console.log(name);
						console.log(char);
						name.text("Name: " + char.name);	
						console.log(name);				

						var gender = $('<p>');
						gender.text("Gender: " + char.gender);
						
						var height = $('<p>');
						height.text("Height: " + char.height);
				
						starWarsDiv.append(name).append(gender).append(height);
						giphyDiv.append(starWarsDiv);
						$('#giphy-results').append(giphyDiv);
					};
				});
			};
		});
	});
			
});




