import React from "react";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main className='item'>
        <ImageSlider />
        <Content />
      </main>
    </div>
  );
}

export default App;
