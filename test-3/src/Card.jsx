import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Avatar() {
    return <div className="mx-auto  bg-[#323645] w-28 h-28 rounded-full border-gray-600 shadow-lg flex justify-center items-center">
        <FontAwesomeIcon icon={faUser} className="text-white outline-white text-6xl" />
    </div>
}

function Card({ name, title }) {
    return <div className="bg-[#222531] h-85 w-85 rounded-2xl m-auto mt-10 border-gray-700 shadow-2xl ">
        <Avatar />
        <h2 className="text-white text-xl font-semibold mt-4 mx-auto text-center">{name}</h2>
        <p className="text-gray-400 text-sm text-center">{title}</p>
    </div>
}


export { Card, Avatar };