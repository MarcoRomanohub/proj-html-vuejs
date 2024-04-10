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
      name: 'Law Faculty',
      image: 'public/edu/img/Gavel-v2.png'
    },
    {
      name: 'Economy',
      image: 'public/edu/img/Coins-tabs-v2.png'
    },
    {
      name: 'Medicine',
      image: 'public/edu/img/Medicine-tabs-v2.png'
    },
    {
      name: 'Computer Scienze',
      image: 'public/edu/img/Computer-tabs-v2.png'
    },
    {
      name: 'Graphic Design',
      image: 'public/edu/img/Palette-tabs-v2.png'
    },
  ]
})