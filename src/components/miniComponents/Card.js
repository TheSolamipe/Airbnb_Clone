import React from "react";
import "./../../sass/main.scss";

function Card({ title, description, src, price }) {
  return (
    <div className="card">
      <img src={src} alt={title} />
    </div>
  );
}

export default Card;
