import "@fontsource/roboto";
import "@fontsource/montserrat";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={"placeholder <LoginPage>"} />
      <Route path="/register" element={"placeholder <RegisterPage>"} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/movie/:id" element={"placeholder <MoviePage />"} />
      <Route path="/watchlist" element={"placeholder <WatchlistPage />"} />
      <Route path="/ratings" element={"placeholder <RatingsPage />"} />
      <Route path="*" element={"placeholder <NotFoundPage />"} />
    </Routes>
  );
}

export default App;
