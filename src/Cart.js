import { useEffect, useState } from "react";
import prod1ImgThb from "./images/image-product-1-thumbnail.jpg";

function Cart(props) {
  const [quantity, setQuatity] = useState(props.quantity);
  const [displayCart, setDisplayCart] = useState(false);
  useEffect(() => {
    setQuatity(props.quantity);
  }, [props.quantity]);

  function deleteItem() {
    setQuatity(0);
  }
  function toggleDisplayCart() {
    setDisplayCart((prevState) => !prevState);
  }

  return (
    <div className="cart">
      <div className="logo-container">
        <svg
          className="cart-logo"
          onClick={toggleDisplayCart}
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        {quantity ? <p className="quantity-notif">1</p> : ""}
      </div>
      <div
        className={
          displayCart ? "cart-dropdown-menu display-cart" : "cart-dropdown-menu"
        }
      >
        <div className="cart-title">
          <p>Cart</p>
          <button className="close" onClick={toggleDisplayCart}>
            x
          </button>
        </div>
        <div className="cart-items">
          {quantity > 0 ? (
            <div className="unempty-cart">
              <div className="cart-products">
                <img className="cart-product-img" src={prod1ImgThb}></img>
                <div className="product-infos">
                  <p className="product-cart-name">
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="total-price">
                    $125.00 x {quantity}{" "}
                    <span>${125.0 * props.quantity}.00</span>
                  </p>
                </div>
                <button className="delete" onClick={deleteItem}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
              <button className="checkout">Checkout</button>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
