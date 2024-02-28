import React, { useState } from "react";
import "./productDescription.css";
import { useFornitureContext } from "../../../../context/productContext";
import { useNavigate, useParams } from "react-router-dom";
import { userFornitureContext } from "../../../../context/user";
import toast, { Toaster } from 'react-hot-toast';

type Props = {};

export default function ProductDescription({}: Props) {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const { productId } = useParams();

  const productsFromArray = useFornitureContext();

  const productShow = productsFromArray.array.find((element) => {
    return element.id === productId;
  });

  //Acces to context
  const userFromContext = userFornitureContext().array;

  const includeProductInUserArray = () => {
    for (let i = 0; i < count; i++) {
      userFromContext.cart.push(productShow);
    }
  };

  const goToCart = () => {
    toast.success('Añadido a cesta!')

    setTimeout(() => {
      navigate("/cart")
    }, 1000);
    
  };

  const onlyToastSum = () => {
    toast.success('Añadido correctamente!')
  }

  const onlyToastDel = () => {
    toast.success('Quitado correctamente!')
  }

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}/>

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
          goToCart();
          }}>

          <img src="src/assets/cart-btn-icon.svg" alt="comprar" />
          Añadir a Cesta
        </button>
        
      <div className="btns-counter">
            <button
              className="btn" onClick={() => {
                if (count > 0) setCount((prevState) => prevState - 1);
                onlyToastDel();}
                }>
              -
            </button>
            <p className="count-product">{count}</p>
            <button
              className="btn" onClick={() => {
                setCount((prevState) => prevState + 1)
                onlyToastSum();}
                }>
              +
            </button>
        </div>
      </div>
    </>
  );
}
