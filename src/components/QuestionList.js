import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem"
function QuestionList() {
const [items, setItems] = useState([]);
console.log("items is: ", items);
useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then ((response) => response.json())
  .then((items) => setItems(items))
  .catch((error) => console.error("Error fetching items:", error));
}, [])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {items.map((item) => (
        <QuestionItem key={item.id} question={item} items={items} setItems={setItems}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
