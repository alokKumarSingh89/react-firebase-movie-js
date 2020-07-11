import React from "react";
import { Box } from "@material-ui/core";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Dashboard from "./containers/Dashboard";
import MovieDetails from "./components/MovieDetails";
import Data from "./test";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Box>
      <Header />
      <Router>
        <MovieDetails path="/movie/:id" movies={Data.movies} />
        <Dashboard exact path="/" />
        <PageNotFound path="*" />
      </Router>
    </Box>
  );
}

export default App;
