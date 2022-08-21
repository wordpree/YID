import React from "react";
import Card from "./Card";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import project from "../public/project.svg";
import service from "../public/service.svg";
import property from "../public/property.svg";
import design from "../public/design.svg";

const cards = [
  {
    icon: design,
    title: "Bespoke Design",
    content: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: service,
    title: "Professional Services",
    content: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: project,
    title: "Project Managment",
    content: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: property,
    title: "Property Development",
    content: "Built Wicket longer admire do barton vanity itself do in it.",
  },
];

const Feature = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.cardEntry}>
        {cards.map((c) => (
          <Card key={c.title} {...c} />
        ))}
        <article className={styles.cardContainer} />
      </div>
      <section className="feature-section">
        <h3 className={styles.mainTitle}>Recent Featured</h3>
        <div className={styles.project}>
          <Image
            src="/recent.jpg"
            layout="responsive"
            alt="recent featured project"
            height="55%"
            width="100%"
            objectFit="contain"
            className={styles.featureImg}
          />
          <p className={styles.mainText}>
            An extremely challengable project requires mutidispline
            co-ordination between architects, services consultants, specilist
            consultants and building consultants. to coporating closely in order
            to redesign certain floor levels architecturally and structurally
            for a new specialist centre and to accomandate heavy medical
            equipments in the middle height of the building. a seriers of
            constrains play important roles in the process. As such as high
            degree of uncertainty project, some issues will resolve along the
            way of construction.
          </p>
        </div>
        <div className={styles.project2}>
          <Image src="/project_2.jpg" alt="facade upgrade" layout="fill" />
        </div>
      </section>
    </div>
  );
};

export default Feature;
