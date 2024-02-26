import React, { useState } from "react";
import "./productDescription.css";
import { useFornitureContext } from "../../../../context/productContext";
import { Navigate, useParams } from "react-router-dom";
import { userFornitureContext } from "../../../../context/user";

type Props = {};

export default function ProductDescription({}: Props) {
  const [count, setCount] = useState(1);

  const { productId } = useParams();

  const productsFromArray = useFornitureContext();

  const productShow = productsFromArray.array.find((element) => {
    return element.id === productId;
  });

  //Acceder a los usuarios
  const userFromContext = userFornitureContext().array;

  const includeProductInUserArray = () => {
    for (let i = 0; i < count; i++) {
      userFromContext.cart.push(productShow);
    }
  };

  return (
    <>
      <div className="img-product">
        <img
          src={productShow?.Image}
          alt={productShow?.Name}
          height={"350px"}
        />
      </div>

      <div className="description-product">
        <h2>{productShow?.Name} </h2>
        <h3>{productShow?.Price} €</h3>
        <p>{productShow?.Description}</p>
        <p>
          <strong>Medidas: </strong>
          {productShow?.Meassures}{" "}
        </p>
        <p>
          <strong>Material: </strong>
          {productShow?.Material}{" "}
        </p>
      </div>

      <div className="add-cart">
        <button className="btn-add-cart" onClick={() =>{
          includeProductInUserArray();
          // Navigate("/cart");
          }}>
          <img src="src/assets/cart-btn-icon.svg" alt="comprar" />
          Añadir a Cesta
        </button>
        
      <div className="btns-counter">
            <button
              className="btn" onClick={() => setCount((prevState) => prevState - 1)}>
              -
            </button>
            <p className="count-product">{count}</p>
            <button
              className="btn" onClick={() => setCount((prevState) => prevState + 1)}>
              +
            </button>
        </div>
      </div>
    </>
  );
}
