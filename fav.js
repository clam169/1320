var favouriteMovies = [];

function addFavouriteMovie(movieName){
    if(!movieName.includes("The")){;    
        favouriteMovies.push(movieName);
    }
}

addFavouriteMovie(" Spiderman");
addFavouriteMovie(" The awakening");
addFavouriteMovie(" The movie");
addFavouriteMovie(" SHAOLIN SOCCER");
addFavouriteMovie(" Train to Busan");

function printFavouriteMovie() {
    console.log("Favourite movies: " + favouriteMovies.length);
    console.log("They are" + favouriteMovies);
}

printFavouriteMovie()

