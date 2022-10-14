import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const data = [
  {
    id: 1,
    name: 'Home',
    path: '#',
  },

  {
    id: 2,
    name: 'About',
    path: '#',
  },

  {
    id: 3,
    name: 'Projects',
    path: '#',
  },

  {
    id: 4,
    name: 'Contact',
    path: '#',
  },
];

const social = [
  {
    id: 1,
    name: 'Facebook',
    icon: <AiFillFacebook />,
    path: '#',
  },

  {
    id: 2,
    name: 'Instagram',
    icon: <AiFillInstagram />,
    path: '#',
  },

  {
    id: 3,
    name: 'Twitter',
    icon: <AiFillTwitterSquare />,
    path: '#',
  },
];

export { data, social };
