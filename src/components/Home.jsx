import React from "react";

function Home(props) {
    console.log("props", props);
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://pngimg.com/uploads/phone_hand/phone_hand_PNG79.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone 15
                    </span>
                    <span>
                        Price: $2000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() =>
                            props.addToCartHandler({ price: 1000, name: 'iPhone 15' })
                        }>
                        Add To Cart</button>
                        <button
                        className="remove-cart-btn"
                        onClick={() =>
                            {props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home