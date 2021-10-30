import React from "react";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className='App'>
        <NavBar />
        <main className='item'>
          <ImageSlider />
          <Content />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
