import React from 'react';
import { useGlobalContext } from './context';
import stripeCSS from './stripe.module.css';
import phoneImg from './images/phone.svg';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className={stripeCSS.hero} onMouseOver={closeSubmenu}>
      <div className={stripeCSS.heroCenter}>
        <article className={stripeCSS.heroInfo}>
          <h1>payment infrastructure for the internet</h1>
          <p>
            Milions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts and
            manage their businesses online.
          </p>
          <button className={stripeCSS.btn}>Start now</button>
        </article>
        <article className={stripeCSS.heroImages}>
          <img src={phoneImg} className={stripeCSS.phoneImg} alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
