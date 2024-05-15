import { useEffect, useState } from "react";
import "./resume.css";
import ProductCart from "../productCart";
import { userFornitureContext } from "../../../../context/user";
import EmptyCart from "../emptyCart";

type Props = {};

type ProductCount = {
  [productId: number]: number;
};

export default function Resume({}: Props) {
  //User Context 
  const usersCartProduct = userFornitureContext().array.cart;


  //Adding up prices
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let price: number = 0;
    usersCartProduct.map((element) => {
      price += element.Price;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  const productCount: ProductCount = {};
  usersCartProduct?.map((item) => {
    const productId = parseFloat(item.id);
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  return (
    <div className="resume">
      {usersCartProduct.length === 0 && <EmptyCart/>}
      {usersCartProduct.length>0 && <>
      <h2>Resumen</h2>
      <div>
        {Object.entries(productCount).map(([productId, count]) => {
          return (
            <div key={productId}>
              <ProductCart
                product={usersCartProduct.find((item) => item.id === productId)}
                count={count}
                renderPrice={calculateTotalPrice}
              />
            </div>
          );
        })}
      </div>

      <div className="resume-cart">
        <p>Subtotal</p>{" "}
        <p>
          <strong>{totalPrice} €</strong>
        </p>
      </div>

      <div className="resume-cart">
        <p>Envíos</p>{" "}
        <p>
          <strong>GRATIS</strong>
        </p>
      </div>

      <div className="resume-cart-total">
        <p>TOTAL A PAGAR</p>
        <p>
          <strong>{totalPrice} €</strong>
        </p>
      </div>
      
      </>}

      <div className="img-logo-resume">
        <img
          src="src/assets/logo-forniture-742-color.svg"
          alt="forniture 742"
        />
      </div>
    </div>

    
  );
}
