import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';
import { AppProvider } from './context';
import { Link } from 'react-router-dom';
import stripeCSS from './stripe.module.css';

const Stripe = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <div className={stripeCSS.container}>
        <AppProvider>
          <Navbar />
          <Sidebar />
          <Hero />
          <Submenu />
        </AppProvider>
      </div>
    </div>
  );
};

export default Stripe;
