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
import pagination from './assets/pagination.JPG';
import markdown from './assets/markdown.JPG';
import randomUser from './assets/random_user.JPG';
import photos from './assets/photos.JPG';
import darkMode from './assets/dark_mode.JPG';
import movieDB from './assets/movie_db.JPG';
import hackerNews from './assets/hackers_news.JPG';
import quiz from './assets/quiz.JPG';

export const projectsLinks = [
  {
    name: 'quiz',
    path: '/quiz',
    img: quiz,
    hooks: 'useState, UseContext, Custom Hook',
  },

  {
    name: 'hacker news',
    path: '/hacker-news',
    img: hackerNews,
    hooks: 'useState, UseEffect, UseContext, useReducer, Custom Hook',
  },
  {
    name: 'movie DB',
    path: '/moviedb',
    img: movieDB,
    hooks: 'useState, UseEffect, UseContext, Custom Hook',
  },
  {
    name: 'dark mode',
    path: '/dark-mode',
    img: darkMode,
    hooks: 'useState, UseEffect',
  },
  {
    name: 'stock photos',
    path: '/stock-photos',
    img: photos,
    hooks: 'useState, UseEffect',
  },
  {
    name: 'pagination',
    path: '/pagination',
    img: pagination,
    hooks: 'useState, UseEffect, UseContext, Custom Hook',
  },
  {
    name: 'random user',
    path: '/random-user',
    img: randomUser,
    hooks: 'useState, UseEffect',
  },
  {
    name: 'markdown',
    path: '/markdown',
    img: markdown,
    hooks: 'useState',
  },
  {
    name: 'cocktails',
    path: '/cocktails',
    img: cocktails,
    hooks: 'useState, useEffect, useContext, useCallback, Custom Hook',
  },
  {
    name: 'cart',
    path: '/cart-app',
    img: cart,
    hooks: 'useState, useEffect, useContext, useReducer, Custom Hook',
  },
  {
    name: 'stripe',
    path: '/stripe',
    img: stripe,
    hooks: 'useState, useEffect, useRef, useContext, Custom Hook',
  },
  {
    name: 'sidebar',
    path: '/sidebar-app',
    img: sidebar,
    hooks: 'useState, useContext, Custom Hook',
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
