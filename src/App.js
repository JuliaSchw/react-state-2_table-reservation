// ./src/App.js
import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleIncrement = () => {
    setPeople(people + 1);
  };

  const handleDecrement = () => {
    setPeople(Math.max(0, people - 1));
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        people={people}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
