import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const data = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
  ];

  return (
    <section className="services">
      <Title titleName="services" />
      <div className="services-center">
        {data.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
