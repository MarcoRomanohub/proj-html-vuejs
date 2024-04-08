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
  }
})