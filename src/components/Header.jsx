import React from "react";

function Header(props) {
    console.log("Header", props.data);
    return(
        <div>
            <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/8764/8764182.png" alt="" />
            </div>
        </div>
    )
}

export default Header