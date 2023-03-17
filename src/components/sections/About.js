import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/avatar-2.svg",
  content:
    "I am Ansh Agarwal, A Highly Motivated & Passionated Full Stack Developer from India. I have 4 years of rich experience in WordPress, WooCommerce, REST API, Core PHP and also have knowledge of Python, React, Laravel. ",
};

const progressData = [
  {
    id: 1,
    title: "Core PHP",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Laravel",
    percantage: 70,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Core Wordpress",
    percantage: 90,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "React",
    percantage: 65,
    progressColor: "#c56cf0",
  },
  {
    id: 5,
    title: "Python",
    percantage: 80,
    progressColor: "#e17055",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 150,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Working Hours",
    count: 650,
    icon: "icon-hourglass",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 20,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Years Of Experience",
    count: 4,
    icon: "icon-calendar",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3 align-self-center">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://anshagarwal012.github.io/ANSH%20CV.pdf" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
