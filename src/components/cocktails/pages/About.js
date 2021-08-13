import React from 'react';
import cocktailsCSS from '../cocktails.module.css';

const About = () => {
  return (
    <section className={`${cocktailsCSS.section} ${cocktailsCSS.aboutSection}`}>
      <h1 className={cocktailsCSS.sectionTitle}>about us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sint
        atque quos pariatur quisquam optio ipsa, esse eligendi. Sint ipsa
        voluptatem nihil necessitatibus voluptates temporibus ut rem suscipit
        veniam, reiciendis laudantium incidunt iure eligendi, explicabo earum
        voluptatibus corporis quod. Debitis placeat mollitia, ullam cum
        aspernatur atque quas molestias amet illo!
      </p>
    </section>
  );
};

export default About;
