import React from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className='App'>
      <NavBar />
      <ImageSlider />
      <Header />
    </main>
  );
}

export default App;
