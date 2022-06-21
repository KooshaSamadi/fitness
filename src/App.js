import React from "react";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.pages";
import ExerciseDetail from "./pages/exerciseDetail/exerciseDetail.pages";
import Navbar from "./components/navbar/navbar.components";
import NotFound from "./pages/notFound/notFound.pages";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="exercise/:id" element={<ExerciseDetail />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
