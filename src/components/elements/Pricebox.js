import React from "react";

function Pricebox({ priceboxItem }) {
  const { icon, title, content, price, badge, best, whatsapp, message } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      <img src={icon} alt="Regular" />
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      {
        whatsapp
          ? ('')
          : (<h3 className="price">
            <em>$</em>
            {price}
            <span>/Hour</span>
          </h3>)
      }
      <a href={message} className="btn btn-default">
        Whatsapp
      </a>
    </div>
  );
}

export default Pricebox;
