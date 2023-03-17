import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "UI/UX design",
    content:
      "Designers that specialize in visual identity graphic design collaborate with brand stakeholders to create assets like Logos, Brochers, Visiting card etc",
    color: "#6C6CE5",
    contentColor: "light",
    height: 'auto'
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "The web solutions we develop are feature-rich, highly functional, robust, secure and scalable with engaging UI/UX design that enhances the brand.",
    color: "#F9D74C",
    contentColor: "dark",
    height: 'auto'
  },
  {
    id: 3,
    icon: "images/service-4.svg",
    title: "Software Development",
    content:
      "We develop software that can fulfill the dreams of both the seller and the customer and that can be a hard pillar to hold the heavy dreams of all the people relying on it.",
    color: "#F97B8B",
    contentColor: "light",
    height: '85px'
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
