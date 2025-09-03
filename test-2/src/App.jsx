import React from "react";
import Header from "./Header";
import Card from "./Card";
// import contactsArr from "./contacts";
import Heading from "./Heading";
import notesData from "./notesData";



function App() {
    return <>
        <Header />
        <Heading />
        <div className="flex gap-4 justify-around mt-6">
            {notesData.map(cardItem =>
                <Card
                    title={cardItem.title}
                    content={cardItem.content}
                    date={cardItem.date}
                />
            )}
        </div>
    </>
}

export default App;