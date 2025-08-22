import React from "react";

function Card(props) {
    return <>
        <div className="border bg-gray-900 text-white border-black rounded-sm w-50 h-60 m-2.5"   >
            <div className="flex items-center justify-center w-full h-5/6">
                <img src={props.src} width="75%" alt="logo" />
            </div>
            <p className="text-center">{props.title}</p>
            <p className="text-center text-sm">{props.desc}</p>
        </div>
    </>
}

export default Card;  