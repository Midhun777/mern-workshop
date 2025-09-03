import React from "react";

// function Card(props) {
//     return <>
//         <div className="borde border-2 rounded-sm w-50 h-60 m-2.5 "   >
//             <div className="flex items-center justify-center w-full h-5/6">
//                 <img src={props.src} width="75%" alt="logo" />
//             </div>
//             <p className="text-center">{props.title}</p>
//             <p className="text-center text-sm">{props.desc}</p>
//         </div>
//     </>
// }

function Card(props) {
    return <div className="border border-black rounded p-2">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <p>{props.date}</p>
    </div>
}

export default Card;  