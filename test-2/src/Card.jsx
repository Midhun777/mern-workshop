import React from "react";
import logo from "./assets/react.png"

function Card() {
    return <>
        <div className="border border-black rounded-sm w-50 h-50 m-2.5"   >
            <div className="flex items-center justify-center w-full h-5/6">
                <img src={logo} width="75%" alt="logo" />
            </div>
            <p className="text-center">Here is a sample logo.</p>
        </div>
    </>
}

export default Card;  