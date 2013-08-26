$(function(){

	var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
		
	$("#search-btn").click(function() {

		var txtboxEl = $("#txtbox").val();
		
		if (txtboxEl == "")
		{
			alert('Please input a value on the search box');
		}

		else
		{
			$( "#main" ).animate({width: "460px", opacity: 1, marginTop: "0.3in" }, 900 );
			$.ajax({
			url: server,
			dataType: 'jsonp',
			data: {
				q: txtboxEl,
				apikey: 'hcrurhsttexasrgfm2y6yahm'
				},
			success: showMovies
			});
		}

	});

	function showMovies(response) {
		console.log('response', response)
		
		$('#resultcontainer').replaceWith('<div id ="resultcontainer"></div>');
		$('#container').replaceWith('<div id ="container"></div>');

		var total = response.total;
		if (total == 0)
		{
			$('#resultcontainer').append('<p> -- Showing ' + total + ' result -- </p.>');
		}
		else if (total == 1)
		{
			$('#resultcontainer').append('<p> -- Showing ' + total + ' result -- </p.>');
		}
		else
		{
			$('#resultcontainer').append('<p> -- Showing ' + total + ' results -- </p.>');
		}

		var movies = response.movies;
		for(var i = 0; i<movies.length; i++) {
			var movie = movies[i];
		
			$('#container').append('<p id = "title">' + movie.title + '</p>');
			$('#container').append('<img src=" ' + movie.posters.thumbnail + '" height = "100px width = "40px"/>');
			
	
			if (movie.synopsis == "")
			{
				$('#container').append('<p>' + "<b>Synopsis : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#container').append('<p>' + "<b>Synopsis : </b> " + movie.synopsis + '</p>');
			}

			if (movie.release_dates.theater == "")
			{
				$('#container').append('<p>' + "<b>Released date : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#container').append('<p>' + "<b>Released date : </b> " + movie.release_dates.theater + '</p>');
			}

			if (movie.mpaa_rating == "")
			{
				$('#container').append('<p>' + "<b>Rated : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#container').append('<p>' + "<b>Rated : </b> " + movie.mpaa_rating + '</p>');
			}

			if (movie.runtime  == "")
			{
				$('#container').append('<p>' + "<b>Runtime : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#container').append('<p>' + "<b>Runtime : </b> " + movie.runtime + " min" + '</p>');
			}

			if (movie.critics_consensus == "")
			{
				$('#container').append('<p id = "bottom" >' + "<b>Comments : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#container').append('<p id = "bottom" >' + "<b>Comments : </b> " + movie.critics_consensus + '</p>');
			}

			$("#txtbox").val("");
		}
	}
});

