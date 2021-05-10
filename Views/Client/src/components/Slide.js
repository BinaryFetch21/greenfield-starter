import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function App() {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <img
            className="img-slide"
            src="https://cdn.shopify.com/s/files/1/1355/1401/products/nike.jpg?v=1571099063"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkPzpxuwx3zC4Rb8GW3mMSNNWQogmKLHhJg&usqp=CAU"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://i.pinimg.com/originals/f1/58/30/f15830907eaf974f2026b31548d2c230.jpg"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="data:image/png;base64,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"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://about.puma.com/-/media/images/this-is-puma/history/m-18_1979_puma-no1-logo.ashx?as=1&h=300&iar=1&w=400&hash=886CDD2A45811C0F1A739AB1C2630E56"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://i.pinimg.com/originals/2a/de/c1/2adec15bd2993d9e8c6398bcf651c992.jpg"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://logos-marques.com/wp-content/uploads/2020/06/Fila-logo.jpg"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://mma.prnewswire.com/media/965354/Reebok_Vector_Classic_Logo.jpg?p=facebook"
            alt="SHOE-IMAGE"
          />
        </Item>
        <Item>
          <img
            className="img-slide"
            src="https://cdn.worldvectorlogo.com/logos/asics-1.svg"
            alt="SHOE-IMAGE"
          />
        </Item>
      </Carousel>
    </div>
  );
}