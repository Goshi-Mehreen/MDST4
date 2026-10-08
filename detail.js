const params = new URLSearchParams(window.location.search);

const movieId = params.get("id");

console.log("Movie ID:", movieId);


// ==========================
// MOVIE DETAILS API
// ==========================

const apiUrl =
    `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${movieId}&with_images=true`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        console.log("API DATA:", data);
        

        const movie = data.data.movie;


        // Poster
        document.getElementById("moviePoster").src =
            movie.medium_cover_image;


        // Title
        document.getElementById("movieTitle").textContent =
            movie.title;


        // Year
        document.getElementById("movieYear").textContent =
            movie.year;


        // Genres
        document.getElementById("movieGenres").textContent =
            movie.genres.join(" / ");


        // Rating
        document.getElementById("movieRating").textContent =
            movie.rating;


        // Runtime
        document.getElementById("movieRuntime").textContent =
            movie.runtime + " min";


        // Language
        document.getElementById("movieLanguage").textContent =
            movie.language;


        // Description
        document.getElementById("movieSummary").textContent =
            movie.description_full;


        
       
    })
    .catch(error => {
        console.log("ERROR:", error);
    });



// ==========================
// SIMILAR MOVIES API
// ==========================

const similarApi =
    `https://movies-api.accel.li/api/v2/movie_suggestions.json?movie_id=${movieId}`;

fetch(similarApi)
    .then(response => response.json())
    .then(data => {

        console.log("SIMILAR MOVIES:", data);

        const similarMovies = data.data.movies;

        const similarImages =
            document.querySelectorAll(".similarMovieImage");


        similarMovies.forEach((movie, index) => {

            similarImages[index].src =
                movie.medium_cover_image;

            similarImages[index].alt =
                movie.title;

        });
        

    })
    .catch(error => {
        console.log("SIMILAR MOVIES ERROR:", error);
    });