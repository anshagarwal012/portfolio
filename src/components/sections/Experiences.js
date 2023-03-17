import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Python Programming",
    years: "2021 - 2022",
    content:
      "I have successfully completed Python Programming for Beginners in Data Science",
  },
  {
    id: 2,
    title: "PHP & MySQL",
    years: "2021 - 2022",
    content:
      "I have successfully completed PHP & MySQL - Certification Course",
  },
  {
    id: 3,
    title: "O'Level Diploma",
    years: "2020 -2021",
    content:
      "I have successfully completed O'level course",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    years: "2022 - Present",
    content:
      "In Woodevz Technologies Pvt. Ltd. My Responsibilities is to create WordPress (Themes & Plugins), Integrates Payment Gateways, Working with API’s, meeting with clients etc.",
  },
  {
    id: 2,
    title: "Senior Designer & Developer",
    years: "2020 - 2022",
    content:
      "In Web IT Solution Hub Work as a Graphics Designer, Website Developer, Backend Management Work, Video Editor, Motion Graphic, Animation etc.",
  },
  {
    id: 3,
    title: "Graphic Designer & Management",
    years: "2018 - 2020",
    content:
      "In Chhappan Bhog Work as a Graphics Designer, Website Management Head, Software Management and Some Other Responsibilities.",
  },
  {
    id: 4,
    title: "Senior Graphic Designer",
    years: "2017 - 2018",
    content:
      "In Aditya Printers Work as a Graphics Designer and Operate Laser Machine, & Flex Machine.",
  },
  {
    id: 5,
    title: "Junior Ui/Ux Designer",
    years: "2016 - 2017",
    content:
      "In Alexa Global Soft Tech Pvt. Ltd. My Responsibilities to create website's UI with UX.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
