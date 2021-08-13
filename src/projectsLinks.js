import cocktails from './assets/cocktails.JPG';
import birthday from './assets/birthday-reminder.JPG';
import cart from './assets/cart.JPG';
import stripe from './assets/stripe.JPG';
import grocery from './assets/grocery.JPG';
import lorem from './assets/lorem.JPG';
import slider from './assets/slider.JPG';
import tabs from './assets/tabs.JPG';
import menu from './assets/menu.JPG';
import accordion from './assets/accordion.JPG';
import reviews from './assets/reviews.JPG';
import tours from './assets/tours.JPG';
import navbar from './assets/navbar.JPG';
import sidebar from './assets/sidebar.JPG';
import color from './assets/color.JPG';

export const projectsLinks = [
  {
    name: 'cocktails',
    path: '/cocktails',
    img: cocktails,
    hooks: 'useState, useContext, useEffect, useCallback, CustomHook',
  },

  {
    name: 'cart',
    path: '/cart-app',
    img: cart,
    hooks: 'useState, useEffect, useContext, useReducer, CustomHook',
  },
  {
    name: 'stripe',
    path: '/stripe',
    img: stripe,
    hooks: 'useState, useEffect, useRef, useContext, CustomHook',
  },
  {
    name: 'sidebar',
    path: '/sidebar-app',
    img: sidebar,
    hooks: 'useState, useContext, CustomHook',
  },
  {
    name: 'navbar',
    path: '/app-navbar',
    img: navbar,
    hooks: 'useState, useRef, useEffect',
  },
  {
    name: 'grocery',
    path: '/grocery',
    img: grocery,
    hooks: 'useState, useEffect',
  },
  {
    name: 'color generator',
    path: '/color-generator',
    img: color,
    hooks: 'useState, useEffect',
  },

  {
    name: 'slider',
    path: '/slider',
    img: slider,
    hooks: 'useState, useEffect',
  },
  { name: 'tabs', path: '/tabs', img: tabs, hooks: 'useState, useEffect' },

  {
    name: 'tours',
    path: '/tours-app',
    img: tours,
    hooks: 'useState, useEffect',
  },
  {
    name: 'lorem ipsum',
    path: '/lorem-ipsum',
    img: lorem,
    hooks: 'useState',
  },
  { name: 'accordion', path: '/accordion', img: accordion, hooks: 'useState' },
  { name: 'reviews', path: '/reviews', img: reviews, hooks: 'useState' },
  { name: 'menu', path: '/menu', img: menu, hooks: 'useState' },
  {
    name: 'birthday reminder',
    path: '/birthday-reminder',
    img: birthday,
    hooks: 'useState',
  },
];
