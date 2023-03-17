import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Robert James",
    subtitle: "Client",
    review:
      "This guy has the skills needed. He completed the task very fast. Other freelancers could not solve the task but this guy did an awesome job. I wouldn't mind working with him in the future.",
  },
  {
    id: 2,
    avatar: "images/avatar-3.svg",
    userName: "Amelia Thompson",
    subtitle: "Client",
    review:
      "All you guys are awesome! Thanks for always helping me. Always very nice and friendly. 👍",
  },
  {
    id: 3,
    avatar: "images/avatar-2.svg",
    userName: "Daniel Paul",
    subtitle: "Client",
    review:
      "We are truly happy with Ansh, truly serious and harmonious in their work. Ansh and his team of programmers have always been there for us all the time. This is a company I can suggest to anyone to accomplish any composition.",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Client Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
