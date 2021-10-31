import { useState } from "react";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import LightBox from "./components/LightBox";
import NavBar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

const IMAGES: string[] = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

const THUMBS: string[] = [
  "image-product-1-thumbnail.jpg",
  "image-product-2-thumbnail.jpg",
  "image-product-3-thumbnail.jpg",
  "image-product-4-thumbnail.jpg",
];

export type ItemInterface = {
  brand: string;
  itemName: string;
  itemDesc: string;
  price: number;
  discount: number;
  ogPrice: number;
};

const ITEMDATA: ItemInterface = {
  brand: "Sneaker Company",
  itemName: "Fall Limited Edition Sneakers",
  itemDesc: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they’ll withstand everything the
  weather can offer.`,
  price: 125,
  discount: 0.5,
  ogPrice: 125 / 0.5,
};

function App() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const changeImage = (index: number): void => {
    setCurrentImage(index);
  };

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
          <ImageSlider
            currentImage={currentImage}
            productImages={IMAGES}
            productThumbs={THUMBS}
            openOverlay={openOverlay}
            changeImage={changeImage}
          />
          <Content itemData={ITEMDATA} />
        </main>
        {overlay && (
          <LightBox closeOverlay={closeOverlay}>
            <ImageSlider
              currentImage={currentImage}
              productImages={IMAGES}
              productThumbs={THUMBS}
              openOverlay={openOverlay}
              changeImage={changeImage}
            />
          </LightBox>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
