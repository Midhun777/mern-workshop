import React from "react";
import Header from "./Header"
import { Card } from "./Card";

function App() {
  return <div className="bg-[#464d66]">
      <Header />
      <Card
        name="Midhun"
        title="Fullstack developer"
      />  
      <Card
        name="Midhun"
        title="Fullstack developer"
      />
      <Card
        name="Midhun"
        title="Fullstack developer"
      />
  </div>
}

export default App;