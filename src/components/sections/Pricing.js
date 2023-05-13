import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

const priceboxData = [
  {
    id: 1,
    title: "Basic",
    icon: "images/price-2.svg",
    content: [
      {
        id: 0,
        text: "Hire me for to get that project done before blink of an eye",
      }
    ],
    price: '',
    whatsapp: true,
    message: 'https://api.whatsapp.com/send?phone=919696084837&text=I%20am%20interested%20in%20hiring%20you%20on%20your%20*basic*%20plan',
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "Hourly",
    icon: "images/price-3.svg",
    content: [
      {
        id: 1,
        text: "Hire me hourly basis for fast and effective work results",
      }
    ],
    price: 15,
    whatsapp: false,
    message: 'https://api.whatsapp.com/send?phone=919696084837&text=I%20am%20interested%20in%20hiring%20you%20on%20your%20*Hourly*%20plan',
    best: true,
    badge: "Recommended",
  },
  {
    id: 3,
    title: "Creative",
    icon: "images/price-1.svg",
    content: [
      { id: 1, text: "Engage our expert developers as per your project requirement" }
    ],
    price: 99,
    whatsapp: true,
    message: 'https://api.whatsapp.com/send?phone=919696084837&text=I%20am%20interested%20in%20hiring%20you%20on%20your%20*Creative*%20plan',
    best: false,
    badge: false,
  },
];

function Pricing() {
  return (
    <section id="prices">
      <div className="container">
        <Pagetitle title="Pricing Plans" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
