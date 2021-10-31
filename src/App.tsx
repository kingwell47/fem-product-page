import { useState } from "react";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import LightBox from "./components/LightBox";
import NavBar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  const [overlay, setOverlay] = useState<boolean>(false);

  const openOverlay = (): void => {
    setOverlay(true);
    document.body.classList.add("open");
  };

  const closeOverlay = (): void => {
    setOverlay(false);
    document.body.classList.remove("open");
  };
  return (
    <CartProvider>
      <div className='App'>
        <NavBar />
        <main className='item'>
          <ImageSlider openOverlay={openOverlay} />
          <Content />
        </main>
        {overlay && <LightBox closeOverlay={closeOverlay} />}
      </div>
    </CartProvider>
  );
}

export default App;
