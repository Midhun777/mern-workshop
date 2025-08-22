import React from "react";
import Header from "./Header";
import Card from "./Card";
import reactLogo from "./assets/react.png";
import nodeLogo from "./assets/node.png";
import expressLogo from "./assets/express.png";


function App() {
    return <>
        <Header />
        <Card
            src={reactLogo}
            title="React"
            desc="Frontend"
        />
        <Card
            src={nodeLogo}
            title="NodeJs"
            desc="Backend"
        />
        <Card
            src={expressLogo}
            title="ExpressJs"
            desc="Middleware"
        />
    </>
}

export default App;