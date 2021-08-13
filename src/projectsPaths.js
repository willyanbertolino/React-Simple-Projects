import Projects from './Projects';
import BirthdayReminder from './components/birthdayReminder/BirthdayReminder';
import CartApp from './components/cart/CartApp';
import ToursApp from './components/tours/ToursApp';
import Reviews from './components/reviews/Reviews';
import Accordion from './components/accordion/Accordion';
import Menu from './components/menu/MenuApp';
import Tabs from './components/tabs/Tabs';
import Slider from './components/slider/Slider';
import LoremIpsum from './components/lorem/LoremIpsum';
import ColorGenerator from './components/colorGenerator/ColorGenerator';
import Grocery from './components/grocery/Grocery';
import AppNavbar from './components/navbar/AppNavbar';
import SidebarApp from './components/sidebar_modal/SidebarApp';
import Stripe from './components/stripe/Stripe';
import CocktailsApp from './components/cocktails/CocktailsApp';

export const projectsPaths = [
  {
    path: '/',
    app: <Projects />,
  },
  {
    path: '/birthday-reminder',
    app: <BirthdayReminder />,
  },
  {
    path: '/cart-app',
    app: <CartApp />,
  },
  {
    path: '/stripe',
    app: <Stripe />,
  },
  {
    path: '/sidebar-app',
    app: <SidebarApp />,
  },
  {
    path: '/app-navbar',
    app: <AppNavbar />,
  },
  {
    path: '/grocery',
    app: <Grocery />,
  },
  {
    path: '/color-generator',
    app: <ColorGenerator />,
  },
  {
    path: '/lorem-ipsum',
    app: <LoremIpsum />,
  },
  {
    path: '/slider',
    app: <Slider />,
  },
  {
    path: '/tabs',
    app: <Tabs />,
  },
  {
    path: '/menu',
    app: <Menu />,
  },
  {
    path: '/accordion',
    app: <Accordion />,
  },
  {
    path: '/reviews',
    app: <Reviews />,
  },
  {
    path: '/tours-app',
    app: <ToursApp />,
  },
  {
    path: '/cocktails',
    app: <CocktailsApp />,
  },
];
