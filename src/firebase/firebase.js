import app from "firebase";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyDvV3AsgJoJcXmDvg4P-Zr0YnbkPZx_NwM",
    authDomain: "movie-firebase-vue.firebaseapp.com",
    databaseURL: "https://movie-firebase-vue.firebaseio.com",
    projectId: "movie-firebase-vue",
    storageBucket: "movie-firebase-vue.appspot.com",
    messagingSenderId: 782342064925,
    appId: "1:782342064925:web:f31db6175324956dc5eff4"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }
    async loadMovies() {
        let movies = await this.db.collection("movie-list").get();
        const moviesList = [];
        movies.forEach(movie => {
            moviesList.push({...movie.data(), id: movie.id });
        });
        console.log(moviesList);
        return moviesList;
    }
}
export default Firebase;