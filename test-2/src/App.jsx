import React from "react";
import Header from "./Header";
import Card from "./Card";
import contactsArr from "./contacts";
import Heading from "./Heading";

function createCard(cardItem) {
    return <Card
        src={cardItem.src}
        title={cardItem.title}
        desc={cardItem.desc}
    />
}

function App() {
    return <>
        <Header />
        <Heading />
        <div className="flex gap-4 justify-around mt-6">
        {contactsArr.map(createCard)}
        </div>
    </>
}

export default App;