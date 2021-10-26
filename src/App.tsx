import React from "react";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className='App'>
      <NavBar />
      <ImageSlider />
      <Content />
    </main>
  );
}

export default App;
