import React from "react";
import agencyImg from "../../assets/images/agency.svg";
import endImg from "../../assets/images/end-to-end.svg";
import mentorImg from "../../assets/images/mentoring.svg";
import teamImg from "../../assets/images/team-player.svg";

import "./HighlightList.scss";

function HighlightList() {
  const highlights = [
    {
      text: "Working in an agency, which has afforded me a unique and invaluable breadth of experience as a developer. This dynamic environment has exposed me to a diverse range of projects. From e-commerce platforms to content management systems, I've had the opportunity to work on a wide array of web applications, honing my skills in various programming languages and design tools.",
      title: "5+ Years",
      illustration: agencyImg,
      id: 0,
    },
    {
      text: "I pride myself on ensuring a smooth and efficient development process. Whether it's writing clean, efficient code or collaborating closely with designers and stakeholders, I am dedicated to delivering high-quality websites that not only meet but exceed client expectations. Interacting directly with clients has been an integral part of my role. It has provided me with a deep understanding of client needs, enabling me to effectively translate their vision into functional, user-friendly websites.",
      title: "End to end",
      illustration: endImg,
      id: 1,
    },
    {
      text: "Collaborative projects in the agency setting have given me extensive exposure to various development methodologies and practices. I've learned how to seamlessly integrate my efforts with those of my colleagues, ensuring a cohesive and synchronized workflow. Additionally, I've had the privilege of taking on leadership roles within project teams. This responsibility has taught me how to delegate tasks, manage timelines, and ensure everyone is working towards a shared goal.",
      title: "Team player",
      illustration: teamImg,
      id: 2,
    },
    {
      text: "Over the course of my career, I've had the privilege of taking on mentoring and leadership roles, particularly in guiding junior developers. I find immense satisfaction in sharing my knowledge and experience to help others grow in their roles. Through one-on-one sessions, code reviews, and collaborative projects, I've provided guidance on best practices, coding standards, and problem-solving techniques. I make it a point to foster an environment where questions are encouraged and no one feels hesitant to seek assistance.",
      title: "Mentoring",
      illustration: mentorImg,
      id: 3,
    },
  ];
  return (
    <ul className="c-about__highlights__list">
      {highlights.map((highlight) => {
        return (
          <li className="c-about__highlights__list__item" key={highlight.id}>
            <img
              className="c-about__highlights__list__item__image"
              src={highlight.illustration}
            />
            <h3 className="c-about__highlights__list__item__title">
              {highlight.title}
            </h3>
            <p className="c-about__highlights__list__item__text">
              {highlight.text}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default HighlightList;
