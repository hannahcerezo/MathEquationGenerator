import React from "react";

const Test = ({ facts, setFacts }) => {

  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];


  return (
    <>
      <ul>
        {facts.map((fact) => (
          <li>
            <span style={{ backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)?.color, }}>{fact.category}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Test;