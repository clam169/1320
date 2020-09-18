var favouriteMovies = []

function addFavouriteMovie(movieName){
    if(movieName.includes("The")){;
    return(favouriteMovies);
    } else {
        favouriteMovies.push(movieName);
    }
}

addFavouriteMovie("Spiderman");
addFavouriteMovie("The awakening");
addFavouriteMovie("The movie");
addFavouriteMovie("SHAOLIN SOCCER")


console.log("My favourite movies: " + favouriteMovies)
