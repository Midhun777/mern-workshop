import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p className="text-gray-500 text-sm">©{currentYear}</p>
    </footer>
}

export default Footer;;