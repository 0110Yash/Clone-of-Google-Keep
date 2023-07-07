import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(saveObj) {
    setItems((prevItems) => [...prevItems, saveObj]);
  }

  function handleDClick(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />

      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.text}
          handleClick={handleDClick}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
