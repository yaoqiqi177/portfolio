import Teton from '../assets/images/teton.png'
import Mqs from '../assets/images/mqs.png'
import Resaurant from '../assets/images/freelancing.png'
import HT from '../assets/images/healthterm.png'
export const projects = [
  {
    company: 'Teton.ai',
    website: 'https://www.teton.ai/da',
    application: 'Teton Alert',
    description:
      'An application to manage and monitor patients in care-home and hospitals',
    image: Teton,
    techs: [
      'React (NextJS)',
      'React Native',
      'Tailwind CSS',
      'Tanstack Query',
      'Headless UI',
      'Framer-motion',
      'Typescript'
    ]
  },
  {
    company: 'Rhapsody Health',
    website: 'https://rhapsody.health/solutions/terminology-management/',
    application: 'Rhapsody Semantics',
    description: 'A web application for managing medical terminology',
    image: HT,
    techs: [
      'Vue3',
      'PrimeVue',
      'PrimeFlex',
      'ChartJS',
      'SASS',
      'Cypress',
      'OpenAPI',
      'Figma',
      'Yarn',
      'Typescript'
    ]
  },
  {
    company: 'Molecular Quantum Solutions',
    website:
      'https://blog.mqs.dk/posts/4_mqs_dashboard_release/new_dashboard_release/',
    application: 'MQS Dashboard',
    description:
      'Web application developed for chemical engineers to simulate experiments results in the laboratory using quantum technology',
    image: Mqs,
    techs: ['React', 'Redux', 'PlotlyJS', 'Typescript', '3Dmol.js']
  },
  {
    company: 'Freelancing websites',
    website: '',
    image: Resaurant,
    application: 'Restaurant landing website',
    description:
      'Freelancing project, for restaurants to display basic info and menu',
    techs: ['CSS', 'JQuery', 'Bootstrap', 'Javascript', 'Grid']
  }
]
