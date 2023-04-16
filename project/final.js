// Fetch the JSON data from the URL
fetch('data.json')
.then(response => response.json())
.then(data => {
  // Create an empty array to hold movie information
  const movies = [];

  // Loop through each movie in the data and add it to the movies array
  data.forEach(movie => {
    movies.push(`
      <h2>${movie.title}</h2>
      <p><strong>Genre:</strong> ${movie.genres.join(', ')}</p>
      <p><strong>Release Date:</strong> ${movie.release_date}</p>
      <p><strong>Overview:</strong> ${movie.overview}</p>
      <hr>
    `);
  });

  // Add the movie information to the web page
  document.getElementById('movies').innerHTML = movies.join('');
})
.catch(error => console.error(error));
// Define a function to display movie details
function displayMovie(movie) {
    // Get the DOM elements for movie details
    const titleElem = document.getElementById("movie-title");
    const taglineElem = document.getElementById("movie-tagline");
    const overviewElem = document.getElementById("movie-overview");
    const posterElem = document.getElementById("movie-poster");
    const ratingElem = document.getElementById("movie-rating");
    const similarElem = document.getElementById("movie-similar");
  
    // Set the movie details in the DOM elements
    titleElem.textContent = movie.title;
    taglineElem.textContent = movie.tagline;
    overviewElem.textContent = movie.overview;
    posterElem.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    ratingElem.textContent = "Rating: " + movie.vote_average.toFixed(1);
  
    // Set the similar movies list in the DOM element
    let similarList = "";
    movie.similar.forEach((similar) => {
      similarList += `<li>${similar.title}</li>`;
    });
    similarElem.innerHTML = `<ul>${similarList}</ul>`;
  }
  
  // Define the main function to fetch and display movie details
  async function showMovieDetails() {
    try {
      // Get the movie data from the API
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/399566?api_key=YOUR_API_KEY_HERE&append_to_response=external_ids"
      );
      const movie = await response.json();
  
      // Display the movie details
      displayMovie(movie);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the main function to fetch and display movie details
  showMovieDetails();
  