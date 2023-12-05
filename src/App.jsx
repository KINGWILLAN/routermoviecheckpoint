import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import CreateNewMovie from "./components/CreateNewMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import MovieMarketPlace from "./components/MoviemarketPlace";

import NavBar from "./components/NavBar";
import movies from "./data";
import { useMemo, useState } from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

import React from "react";
import MovieLayout from "./components/layout/MovieLayout";

function App() {
  return (
    <div>
      {/* Our Navbar component */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="moviemarketplace" element={<MovieLayout />}>
          <Route index element={<MovieMarketPlace />} />
          <Route path=":movId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
