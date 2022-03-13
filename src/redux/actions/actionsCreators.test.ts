import { Movie, MovieDetails } from "../../interfaces/Movie";
import {
  addLocalMovieAction,
  deleteLocalMovieAction,
  loadLocalMoviesAction,
} from "./actionsCreators";

describe("Given a load local movies action", () => {
  describe("When it receives movies", () => {
    test("Then it should return the action and the movies", () => {
      const movies: Movie[] = [
        {
          Title: "The Leftovers",
          Year: "2014–2017",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
        },
      ];
      const expectedAction = {
        type: "load-local-movies",
        movies,
      };

      const action = loadLocalMoviesAction(movies);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a delete local movie action", () => {
  describe("When it receives a movieId", () => {
    test("Then it should return the action and the movieId", () => {
      const movieId: string = "jk;agd14";
      const expectedAction = {
        type: "delete-local-movie",
        movieId,
      };

      const action = deleteLocalMovieAction(movieId);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an add local movie action", () => {
  describe("When it receives a movie", () => {
    test("Then it should return the action and the movie", () => {
      const movie: MovieDetails = {
        Title: "The Leftovers",
        Year: "2014–2017",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
        Actors: "Main actors",
        Director: "Main director",
        Genre: "drama",
        Plot: "Weird show",
        Runtime: 200,
        Writer: "Damon Lindelof",
      };
      const expectedAction = {
        type: "add-local-movie",
        movie,
      };

      const action = addLocalMovieAction(movie);

      expect(action).toEqual(expectedAction);
    });
  });
});
