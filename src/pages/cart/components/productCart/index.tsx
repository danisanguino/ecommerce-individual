import React, { useState } from "react";
import "./productCart.css";
import { CgTrashEmpty } from "react-icons/cg";
import { Main } from "../../../../interfaces/products";
import { userFornitureContext } from "../../../../context/user";
import toast, { Toaster } from 'react-hot-toast';

type Props = {
  product: Main | undefined;
  count: number;
  renderPrice: Function;
};

export default function ProductCart({ product, count, renderPrice }: Props) {

  const [counter, setCounter] = useState(count);

  const userCart = userFornitureContext().array.cart;

  const addToUserCart = () => {
    setCounter((prevState) => prevState + 1);
    if (userCart && product) userCart.push(product);

    renderPrice();
  };

  const removeToUserCart = () => {
    if (counter > 0) setCounter((prevState) => prevState - 1);

      if (userCart && product) {
        const index = userCart.findIndex((element) => {
        return element.id === product.id;
        });
        userCart.splice(index, 1);
      }
    renderPrice();
  };

  const deleteToUserCart = () => {
    
    for (let i = 0; i <= counter; i++) 
    {
    removeToUserCart();
    }
  }

  const onlyToastSum = () => {
    toast.success('Añadido correctamente!')
  }

  const onlyToastDel = () => {
    toast.success('Quitado correctamente!')
  }

  const emptyCart = () => {
    toast.success('Producto vaciado correctamente!')
  }

  return (
    <>
    <Toaster/>

      {counter > 0 && (
        <div className="product-cart">
          <div className="resume-product">
            <div className="img-resume-product">
              <img src={product?.Image} alt={product?.Name} height={"120px"} />
            </div>
            <div className="price-model-product">
              <h2>{product?.Price} €</h2>
              <p>{product?.Name} </p>
              <p>
                Cant: <strong>{counter}</strong>
              </p>
              <span>
                <button className="btn-product-resume" onClick={() => {
                  removeToUserCart();
                  onlyToastDel();
                  }
                }
                >
                -
                </button>
              </span>
              <span>
                <button className="btn-product-resume" onClick={() => {
                  addToUserCart();
                  onlyToastSum();
                  }
                }
                >
                +
                </button>
              </span>
            </div>
          </div>

          <div className="delete-product" onClick={()=>{
            deleteToUserCart();
            emptyCart();
            }
          }
            >
            <p>
              <CgTrashEmpty size={25} />
            </p>
          </div>
        </div>
      )}
    </>
  );
}
