var favouriteMovies = []

function addFavouriteMovie(movieName){
    if(!movieName.includes("The")){;    
        favouriteMovies.push(movieName);
    }
}

addFavouriteMovie("Spiderman");
addFavouriteMovie("The awakening");
addFavouriteMovie("The movie");
addFavouriteMovie("SHAOLIN SOCCER")
addFavouriteMovie("Jurassic Park")
addFavouriteMovie("God of Gamblers")

console.log("Favourite movies: " + favouriteMovies.length);

var loop = 0
while (loop < favouriteMovies.length){
    console.log(favouriteMovies[loop]);
    loop ++;
}
