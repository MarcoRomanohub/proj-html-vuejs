import { reactive } from 'vue'

export const store = reactive({
  headerMenu: [
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Courses',
      link: '#'
    },
    {
      name: 'About Us',
      link: '#'
    },
    {
      name: 'News',
      link: '#'
    },
    {
      name: 'Pages',
      link: '#'
    },
    {
      name: 'Contact',
      link: '#'
    },
    {
      name: 'Purchase',
      link: '#'
    },
  ],
  footerMenu: {

    eduPrime: [
      {
        name: 'Request a website',
        link: '#'
      },
      {
        name: 'Browse Themes',
        link: '#'
      },
      {
        name: 'Payment options',
        link: '#'
      },
      {
        name: 'Support System',
        link: '#'
      },
      {
        name: 'Checkout',
        link: '#'
      },
      {
        name: 'Purchase Theme',
        link: '#'
      },
    ],

    networking: [
      {
        name: 'Purchase Theme',
        link: '#'
      },
      {
        name: 'Our Benefits',
        link: '#'
      },
      {
        name: 'Our Team',
        link: '#'
      },
      {
        name: 'Our Service',
        link: '#'
      },
      {
        name: 'Other Products',
        link: '#'
      },
      {
        name: 'My account',
        link: '#'
      },
    ]
  },
  categories: [
    {
      name: 'ECONOMY',
      link: '#'
    },
    {
      name: 'DESIGN',
      link: '#'
    },
    {
      name: 'COACHING',
      link: '#'
    },
    {
      name: 'BUSINESS',
      link: '#'
    },
    {
      name: 'MEDICINE',
      link: '#'
    },
    {
      name: 'LAW',
      link: '#'
    },
    {
      name: 'FITNESS',
      link: '#'
    },
  ],
  faculties: [
    {
      id: 1,
      name: 'Law Faculty',
      image: 'public/edu/img/Gavel-v2.png',
      colorImage: 'public/edu/img/Gavel-Illustration-e1556884768193.png'
    },
    {
      id: 2,
      name: 'Economy',
      image: 'public/edu/img/Coins-tabs-v2.png',
      colorImage: 'public/edu/img/Economy.png'
    },
    {
      id: 3,
      name: 'Medicine',
      image: 'public/edu/img/Medicine-tabs-v2.png',
      colorImage: 'public/edu/img/Medicine.png'
    },
    {
      id: 4,
      name: 'Computer Scienze',
      image: 'public/edu/img/Computer-tabs-v2.png',
      colorImage: 'public/edu/img/Computer-Science.png'
    },
    {
      id: 5,
      name: 'Graphic Design',
      image: 'public/edu/img/Palette-tabs-v2.png',
      colorImage: 'public/edu/img/Graphic-Design.png'
    },
  ],
  upcomingEvents: [
    {
      title: 'Coaching Sessions',
      date: '20 May 21:30 PM',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, natus.'
    },
    {
      title: 'Coaching Sessions',
      date: '24 Mar 18:00 PM',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, natus.'
    },
    {
      title: 'Coaching Sessions',
      date: '12 Feb 13:30 PM',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, natus.'
    },
  ],
  latestCourses: [
    {
      icon: 'public/edu/img/Decisions-icon.png',
      name: 'Make Better Decisions',
      teacher: 'James Colins.',
      price: '$21.00'
    },
    {
      icon: 'public/edu/img/Speaker-icon.png',
      name: 'How to be a speaker',
      teacher: 'James Colins.',
      price: 'Free'
    },
    {
      icon: 'public/edu/img/Network-icon.png',
      name: 'Network introductions',
      teacher: 'James Colins.',
      price: 'Free'
    },
    {
      icon: 'public/edu/img/Brand-icon.png',
      name: 'Brand Management',
      teacher: 'James Colins.',
      price: 'Free'
    },
  ]
})