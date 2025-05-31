import Navbar from "./Navbar";
import {useState} from "react";

import prod1ImgThb from "./images/image-product-1-thumbnail.jpg"
import prod1Img from "./images/image-product-1.jpg"
import prod2ImgThb from "./images/image-product-2-thumbnail.jpg"
import prod2Img from "./images/image-product-2.jpg"
import prod3ImgThb from "./images/image-product-3-thumbnail.jpg"
import prod3Img from "./images/image-product-3.jpg"
import prod4ImgThb from "./images/image-product-4-thumbnail.jpg"
import prod4Img from "./images/image-product-4.jpg"


function Main(){
    const [quantity, setQuantity] = useState(0);
    const [imageSelected, setImageSelected] = useState(prod1Img);
    const [quantityToBuy, setQuantityToBuy] = useState(0);

    function increaseQuantity(){
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    function decreaseQuantity(){
        if(quantity===0){
            return
        }
        setQuantity(prevQuantity => prevQuantity - 1);
    }
    function toggleQuantityToBuy(){
        setQuantityToBuy(() => quantity);
    }
    function displayImage(index){
        setImageSelected(()=>{
            if(index===1){
                return prod1Img;
            }else if(index===2){
                return prod2Img;
            }else if(index===3){
                return prod3Img;
            }else{
                return prod4Img;
            }
        });
    }
    
    return(
        <>
        <Navbar 
            quantity={quantityToBuy}
        />
        <div className="main">
            <div className="product-images">
                <img className="product-img"src={imageSelected}></img>
                <ul className="images-list">
                    <li className="thumbnail">
                        <img className="thumbnail-img" src={prod1ImgThb} onClick={()=>displayImage(1)}></img>
                    </li>
                    <li className="thumbnail">
                        <img className="thumbnail-img" src={prod2ImgThb} onClick={()=>displayImage(2)}></img>
                    </li>
                    <li className="thumbnail">
                        <img className="thumbnail-img" src={prod3ImgThb} onClick={()=>displayImage(3)}></img>
                    </li>
                    <li className="thumbnail">
                        <img className="thumbnail-img" src={prod4ImgThb} onClick={()=>displayImage(4)}></img>
                    </li>
                </ul>
            </div>
            <div className="infos">
                <div className="product-infos">
                    <p className="company-name">SNEAKER COMPANY</p>
                    <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                    <p className="desc-paragraph">
                        These low-profile sneakers are your perfect casual wear 
                        companion.Featuring a durable rubber outer sole. they'll
                        withstand everything the weather can offer.
                    </p>
                    <div className="price-container">
                    <p className="price">$125.00 <span>50%</span></p>
                    <del className="old-price">$250.00</del>
                    </div>
                </div>
                <div className="buying-container">
                    <div className="quantite">
                        <button className="q-btn" onClick={decreaseQuantity}>-</button>
                        <p>{quantity}</p>
                        <button className="q-btn" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="buy-btn" onClick={toggleQuantityToBuy}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;