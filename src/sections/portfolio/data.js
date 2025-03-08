import Image1 from '../../assets/project1.png'
import Image2 from '../../assets/project2.png'
import Image3 from '../../assets/project3.png'
import Image4 from '../../assets/project4.png'
import Image5 from '../../assets/reportion.png'
import Image6 from "../../assets/fms.png"
import Image7 from "../../assets/pms.png"
import Image8 from "../../assets/zvitamboDev.png";
import Image9 from "../../assets/task.png";
// import Image6 from '../../assets/project6.jpg'
// import Image7 from '../../assets/project7.jpg'
// import Image8 from '../../assets/project8.jpg'
// import Image9 from '../../assets/project9.jpg'

const data = [
  {
    id: 1,
    category: "fullstack",
    image: Image9,
    title: "Task Planner (Fullstack)",
    desc: "Collaborate, manage projects, and reach new productivity peaks. From high rises to the home offices, the way your team works is unique — accomplish it all with Task-Planner.",
    demo: "https://task-planner-rho.vercel.app",
    github: "https://github.com/zvitambo/organization_management",
  },
  {
    id: 2,
    category: "fullstack",
    image: Image1,
    title: "SME Banking Platform (Fullstack)",
    desc: "Small to medium enterprise banking app for creating savings groups. Community groups and small enterprises manage their savings amongst themselves, with options for giving loans amongst group members",
    demo: "https://roundup.co.zw",
    github: "https://github.com/zvitambo/roundup_app",
  },
  {
    id: 3,
    category: "fullstack",
    image: Image6,
    title: "FMS Financial management system (Fullstack)",
    desc: "A finance management Software As An Application (Saas) platform. All encompassing enterprise financial functionality- Nextjs 14, ReactJs, Typescript, Tailwind CSS, Drizzle, Neon, Clerk Authentication",
    demo: "https://fms-ruby.vercel.app/",
    github: "https://github.com/zvitambo/fms",
  },
  {
    id: 4,
    category: "fullstack",
    image: Image2,
    title: "Jindu Project Tracking Platform (Fullstack)",
    desc: "I created this platform to initially keep track of planning and sharing updates about family projects, like home renovations, family functions and legal processes. It grew to become a platform for sharing family special events and memories too (photos, videos)",
    demo: "https://jindu-project-tracker.onrender.com",
    github: "https://github.com/zvitambo/project-tracker",
  },
  {
    id: 5,
    category: "fullstack",
    image: Image6,
    title: "FMS Financial management system (Fullstack)",
    desc: "A finance management Software As An Application (Saas) platform. All encompassing enterprise financial functionality- Nextjs 14, ReactJs, Typescript, Tailwind CSS, Drizzle, Neon, Clerk Authentication",
    demo: "https://fms-ruby.vercel.app/",
    github: "https://github.com/zvitambo/fms",
  },
  {
    id: 6,
    category: "fullstack",
    image: Image7,
    title: "PMS Patient Care Platform (Fullstack)",
    desc: "A Patient management Software As An Application (Saas) platform. For capturing medical records and booking doctors appointments, with sms notifications.",
    demo: "https://vercel.com/zvitambos-projects/careplatform",
    github: "https://github.com/zvitambo/careplatform",
  },
  {
    id: 7,
    category: "fullstack",
    image: Image3,
    title: "ChatGpt Clone (Fullstack)",
    desc: "A chatgpt clone show casing my frontend and backend development abilities, as well as integrating third party apis in the form of Chatgpt api. This platform is fully functional, login to Chatty Zvitambo and ask him a couple of questions",
    demo: "https://zvitambo-chapgpt-clone-live.vercel.app",
    github: "https://github.com/zvitambo/zvitambo-chapgpt-clone",
  },
  {
    id: 8,
    category: "uiux",
    image: Image4,
    title: "Zvitambo Thomas Jindu Website (UIUX)",
    desc: "My personal website showcasing my portfolio. I created this website to show case my portfolio at the same time show casing my frontend development skills and UX design. Take a look at the code behind this beautiful website on my github account",
    demo: "#",
    github: "https://github.com/zvitambo/portfolio-platform",
  },
  {
    id: 9,
    category: "fullstack",
    image: Image5,
    title: " connected workspace where better, faster work happens",
    desc: "Customized Reports, Ideas, Documents & Plans",
    demo: "https://reportion.vercel.app/",
    github: "https://github.com/zvitambo",
  },
  {
    id: 10,
    category: "frontend",
    image: Image8,
    title: "ZvitamboDev Website",
    desc: "A software development company website show casing thier multiple products and services",
    demo: "https://www.zvitamboDev.co.zw",
    github: "https://github.com/zvitambo/zvitamboDev",
  },
  //   {
  //     id: 6,
  //     category: "frontend",
  //     image: Image6,
  //     title: "Project Title Six (Frontend)",
  //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
  //     demo: "http://egatortutorials.com",
  //     github: "https://github.com/egattor",
  //   },
  //   {
  //     id: 7,
  //     category: "frontend",
  //     image: Image7,
  //     title: "Project Title Seven (Frontend)",
  //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
  //     demo: "http://egatortutorials.com",
  //     github: "https://github.com/egattor",
  //   },
  //   {
  //     id: 8,
  //     category: "backend",
  //     image: Image8,
  //     title: "Project Title Eight (Backend)",
  //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
  //     demo: "http://egatortutorials.com",
  //     github: "https://github.com/egattor",
  //   },
  //   {
  //     id: 9,
  //     category: "frontend",
  //     image: Image9,
  //     title: "Project Title Nine (Frontend)",
  //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
  //     demo: "http://egatortutorials.com",
  //     github: "https://github.com/egattor",
  //   },
];


export default data