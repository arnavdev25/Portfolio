//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiSmartphone
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Zee5 from './assets/img/projects/Zee5 Project.png';
import kindmeal from './assets/img/projects/Kindmeal.png';
import Modesense from './assets/img/projects/modesense.png';
import YouTube from './assets/img/projects/YouTube.png';
import sudoku from './assets/img/projects/sudoku.png';
import FrontendMaster from './assets/img/projects/FrontendMaster.png';

import Github from './assets/img/projects/Github.png';
import Restaurent from './assets/img/projects/Restaurent.png';
import Timer from './assets/img/projects/Timer.png';
import WeatherApp from './assets/img/projects/WeatherApp.png';
// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/ts.png';
import SkillImg10 from './assets/img/skills/express.png';
import SkillImg11 from './assets/img/skills/materialui.png';
import SkillImg12 from './assets/img/skills/mongo.png';
import SkillImg5 from './assets/img/skills/redux.png';
import SkillImg13 from './assets/img/skills/cypress.png';
import SkillImg14 from './assets/img/skills/BootStrap.png';
import SkillImg15 from './assets/img/skills/jest.jpg';
import SkillImg16 from './assets/img/skills/npm.png';
import SkillImg17 from './assets/img/skills/Python.jpg';
import SkillImg18 from './assets/img/skills/Tallwind.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'projects',
    href: 'projects',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon:<FiMail/>,
    href:"princesahil0065@gmail.com"

  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mr_sahil_2507/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/muskan2507',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/muskan2507/',
  },
  {
    icon:<FiSmartphone/>,
    href:"8777092507"
  }
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Zee5,
    name: 'Zee5 Clone',
    category: 'HTML, CSS, JS',
    pro:"Major Project",
    git:"https://github.com/muskan2507/Zee5_Website",
    dep:"https://zee5.durgeshsoni.com/",
    desc:"A web Application to watch serials, movies, web-series and other entertaining videos"
  },
  {
    id: '2',
    image: kindmeal,
    name: 'KindMeal.my Clone',
    category: 'HTML, CSS, Advanced JS, React',
    pro:"Major Project",
    git:"https://github.com/muskan2507/Kindmeal",
    dep:"https://lustrous-hotteok-719fc7.netlify.app/",
    desc:"A web Application to read & write blogs on pets & recipes and watch videos on recipes"
  },
  {
    id: '3',
    image: FrontendMaster,
    name: "Frontend Master's Clone",
    category: 'HTML, CSS, Advanceed JS',
    pro:"Major Project",
    git:"https://github.com/muskan2507/Frontend-Master",
    dep:"https://zingy-cactus-84c80d.netlify.app/",
    desc:"A web Application to Learn Frontend courses & watch videos on it."

  },
  {
    id: '4',
    image: Modesense,
    name: 'Modesense Clone',
    category: 'React, Express, MongoDB, Node.js, CSS, Advanced JS',
    pro:"Major Project",
    git:"https://github.com/muskan2507/Modesense-Clone",
    dep:"https://modesense.netlify.app/",
    desc:"ModeSens is your digital shopping assistant for the smart and informed. Established in 2015,"
  },
  {
    id: '5',
    image: sudoku,
    name: 'Sudoku Solver',
    category: 'HTML, CSS, Advanced JS',
    pro:"Minor Project",
    git:"https://github.com/muskan2507/Sudoku-Solver",
    dep:"https://steady-cendol-1a5f7c.netlify.app/",
    desc:"A web Application to play Sudoku and and find a genius solution."
  },
  // {
  //   id: '6',
  //   image: TicTacToe,
  //   name: 'Tic Tac Toe',
  //   category: 'HTML, CSS, Advanced JS',
  //   pro:"Minor Project",
  //   git:"https://github.com/muskan2507/Tic-Tac-Toe/tree/main/Tic%20Tac%20Toe",
  //   dep:"https://tranquil-cheesecake-739fc7.netlify.app/",
  //   desc:"A web Application to Tic Tac Toe Sudoku and enjoy"

  // },
  // {
  //   id: '7',
  //   image: Timer,
  //   name: 'Google Timer',
  //   category: 'HTML, CSS, Advanced JS, React, Redux',
  //   pro:"Minor Project",
  //   git:"https://github.com/muskan2507/Google-Timer/tree/main/Timer",
  //   dep:"https://tiny-pastelito-678e6d.netlify.app/",
  //   desc:"A web Application for stop watch and setting time"
  // },
  // {
  //   id: '8',
  //   image: WeatherApp,
  //   name: 'Weather App',
  //   category: 'HTML, CSS, Advanced JS',
  //   pro:"Minor Project",
  //   git:"https://github.com/muskan2507/Weather-App/tree/main/Fetch_Weather%20App",
  //   dep:"https://chipper-starlight-7a6736.netlify.app/",
  //   desc:"A web Application to check weather for different places and view wholw week weather forecast"
  // },
  // {
  //   id: '9',
  //   image: Github,
  //   name: 'Github Clone',
  //   category: 'HTML, CSS, Advanced JS',
  //   pro:"Minor Project",
  //   git:"https://github.com/muskan2507/Github-Clone/tree/main/GitHub%20clone",
  //   dep:"https://inquisitive-pie-f190a4.netlify.app/",
  //   desc:"A web Application to search for Github users & their repos"
  // },
  // {
  //   id: '10',
  //   image: Restaurent,
  //   name: 'Mini Restaurant App',
  //   category: 'HTML, CSS, Advanced JS, React',
  //   pro:"Minor Project",
  //   git:"https://github.com/muskan2507/Mini-Restaurant-App",
  //   dep:"https://cute-dragon-acd199.netlify.app/",
  //   desc:"A web Application to Add new restaurants using form and that will be displayed on display table"

  // }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name:"HTML"
  },
  {
    image: SkillImg2,
    name:"CSS"
  },
  {
    image: SkillImg3,
    name:"JavaScript"
  },
  {
    image: SkillImg4,
    name:"React"
  },
  {
    image: SkillImg5,
    name:"Redux"
  },
  {
    image: SkillImg6,
    name:"Node.js"
  },
  {
    image: SkillImg7,
    name:"GIT"
  },
  {
    image: SkillImg8,
    name:"Figma"
  },
  {
    image:SkillImg9,
    name:"TypeScript"
  },
  {
    image:SkillImg10,
    name:"Express.js"
  },
  {
    image:SkillImg11,
    name:"Material UI"
  },
  {
    image:SkillImg12,
    name:"MongoDB"
  },
  {
    image:SkillImg13,
    name:"Cypress"
  },
  {
    image:SkillImg14,
    name:"BootStrap"
  },
  {
    image:SkillImg15,
    name:"Jest"
  },
  {
    image:SkillImg16,
    name:"NPM"
  },
  {
    image:SkillImg17,
    name:"Python"
  },
  {
    image:SkillImg18,
    name:"Tallwind"
  }
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I have done web designing in many projects. i design web pages with responsiveness.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'I have developed  many projects using MERN..',
  },
  {
    icon: <FiPenTool />,
    name: 'Frontend',
    description:
      'I have a great experience in Frontend as well. I really enjoy in designing a beautiful UI.',
  },
  {
    icon: <FiTag />,
    name: 'Backend',
    description:
      "I have also worked upon some backend project & created many APIs",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at princesahil0065@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Kolkata, West Bengal',
    description: 'Serving clients worldwide',
  },
];
