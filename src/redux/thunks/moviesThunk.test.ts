import {
  addLocalMovieThunk,
  deleteLocalMovieThunk,
  loadLocalMoviesThunk,
} from "./moviesThunk";

describe("Given a loadLocalMoviesThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const search = "Hola";
      const dispatch = jest.fn();

      const innerThunk = await loadLocalMoviesThunk(search);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteLocalMovieThunk function", () => {
  describe("When it is called with the right id", () => {
    test("Then it should dispatch a function", async () => {
      const movieId = "622cde84023eda26afe3d1fc";
      const dispatch = jest.fn();

      const innerThunk = await deleteLocalMovieThunk(movieId);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called with a wrong id", () => {
    test("Then it shouldn't dispatch the function", async () => {
      const moveiId = "akljsdg3489";
      const dispatch = jest.fn();

      const innerThunk = await deleteLocalMovieThunk(moveiId);
      await innerThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given an addLocalMovieThunk function", () => {
  describe("When it is called with a movie", () => {
    test("Then it should dispatch a function", async () => {
      const movie = {
        Title: "Adeu",
        Actors: "protagonist supporting character",
        Director: "movie director",
        Genre: "drama",
        Plot: "summary of the movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZT...",
        Runtime: 120,
        Type: "movie",
        Writer: "movie writers",
        Year: "1999",
      };
      const dispatch = jest.fn();

      const innerThunk = await addLocalMovieThunk(movie);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});