$(function() {

    var app = {};

    var urlBoxOffice = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';

     $.ajax({
            url: urlBoxOffice,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showBoxOffice
    });

    var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';

    $("#txtbox").keypress(function(e) {  
        
        var txtboxEl = $("#txtbox").val();
        
        if(e.which == 13) {
            
            if(txtboxEl == "")
            {
                alert("Invalid input: Null data");
            }
            else
            {
             $.ajax({
                url: server,
                data: {  
                    q: txtboxEl,
                    apiKey: 'hcrurhsttexasrgfm2y6yahm'
                },
                dataType: 'jsonp',
                success: showMovies
            });
            }

        }
    });
    
    $("#box-office-btn").click(function() {
        $.ajax({
            url: urlBoxOffice,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showBoxOffice
        });
    
    });

    var urlInTheaters = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';

    $("#in-theaters-btn").click(function() {
        $.ajax({
            url: urlInTheaters,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showInTheaters
        });

    });

    var urlOpening = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json';

    $("#opening-btn").click(function() {
        $.ajax({
            url: urlOpening,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showOpening
        });

    });

    var urlUpComing = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';

    $("#upcoming-btn").click(function() {
        $.ajax({
            url: urlUpComing,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showUpComing
        });

    });

    

    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;

    }

    function showMovies(response) {

        clearField();
        var total = response.total;
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#title-bar').append("Searched Movies");
        $("#txtbox").val("");
        $("#result-counter").append('<p>-- Showing ' + total + ' results --');
    }

    function showBoxOffice(response) {
        
        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#title-bar').append("Box Office Movies");
    }

    function showInTheaters(response) {
        
        clearField();

        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#title-bar').append("In Theaters Movies");
    }

    function showOpening(response) {
        
        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#title-bar').append("Opening Movies");
    }

    function showUpComing(response) {
        
        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#title-bar').append("Upcoming Movies");
    }

    function clearField() {
        
        var newField = document.getElementById("list");
        newField.innerHTML = '';
        var newTitle = document.getElementById("title-bar");
        newTitle.innerHTML = '';
        var newResult = document.getElementById("result-counter");
        newResult.innerHTML = '';
    }

});