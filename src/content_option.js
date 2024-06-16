const logotext = "ETIENNE";
const meta = {
    title: "Etienne Rousseau",
    description: "I’m Etienne Rousseau, a fullstack developer based out of San Fransisco Bay Area",
};

const introdata = {
    title: "I’m Etienne Rousseau",
    animated: {
        first: "I love coding",
        second: "I am a student at UC Davis",
        third: "I develop apps",
    },
    description: "I am a current third year student at UC Davis, interested in software development, machine learning, and programming ",
};

const dataabout = {
    title: "About myself",
    aboutme: "Hi! My name is Etienne Rousseau. I was born and raised in the Bay Area, and since high school I have developed a passion for coding. I first began by creating personal websites for friends, and started working with others on small projects. I then further developed my software skills through work experience learing important skills in React, Python, and C++ and personal projects where I have learned more about machine learning. As a current third year student at UC Davis studying Computer Science, I have further developed my love for programming and problem solving. In my free time I enjoy hanging out with my friends, working out, and playing with my dog"
};
const skills = [{
        name: "Python",
        value: 100,
    },
    {
        name: "Java",
        value: 95,
    },
    {
        name: "C++",
        value: 100,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "C#",
        value: 90,
    },
];const services = [
    {
        title: "Software Engineering Intern: June 2023 - September 2023, Pampa Technologies, Fremont, CA",
        description1: "Engineered a dynamic web application enabling real-time monitoring of automated guided vehicles (AGVs) through Python and React, interfacing with PLC boards to retrieve live data streams.",
        description2: "Empowered streamlined operations by implementing remote restart and servicing functionalities for up to 50 AGVs simultaneously, revolutionizing maintenance protocols and ensuring optimal fleet performance.",
        description3: "Revamped a centralized database application serving 500 users, enhancing user experience by enabling seamless viewing, editing, and creation of specification sheets, along with PDF generation capabilities.",
        description4: "Innovated the integration process for new specification sheet templates, leveraging React TypeScript, .NET, and GRPC technologies to seamlessly incorporate custom filtering and pagination functionalities.",
        description5: "Developed a web application for 3 months used to manage all waste services and added a new authorization system with Angular, C++, and Azure DevOps for hosting."
    },
    {
        title: "Developer: September 2023 - May 2024, Codelab, Davis, CA",
        description1: "Led a cross-functional team of seven in designing and developing a comprehensive dashboard, showcasing diverse users’ aggregate and resilience scores.",
        description2: "Gathered the metrics from five APIs, employing advanced algorithms within a Next.js, MongoDB, and Express stack to derive aggregate and resilience scores, providing valuable insights into user engagement with live content.",
        description3: "Created a full-stack application utilizing FastAPI, Next.js, and MySQL, enabling potential investors to access comprehensive company metrics such as funding details and industry affiliations.",
        description4: "Implemented seamless Google Authentication functionality, enhancing user experience by providing secure login capabilities, with differentiated access levels based on user roles."
    }
];

const projects = [
    {
        title: "LocalFlair: April 2024 - June 2024",
        description1: "Spearheaded the creation of an innovative online marketplace by connecting artisans with buyers, utilizing sustainable, handcrafted products to support community growth.",
        description2: "Orchestrated the development of a feature-rich platform, employing React.js with TypeScript for frontend interactivity and Go (Golang) for backend scalability, ensuring a seamless user experience and robust server-side functionality.",
        description3: "Implemented cutting-edge features like artisan profiles, product listings, custom orders, interactive maps, and community forums.",
        description4: "Leveraged PostgreSQL for data management, OAuth 2.0 for secure authentication, and cloud deployment strategies for scalability and reliability."
    },
    {
        title: "Daily MOOd: Jan 2023 - May 2023",
        description1: "Guided a collaborative team of developers and designers to create a mental health and anxiety management app for UC Davis students.",
        description2: "Utilized React Native for front-end development, Express for back-end development, and MongoDB for database management.",
        description3: "Incorporated features such as uplifting messages and a mood tracking system to provide a holistic approach to student well-being."
    },
    {
        title: "Drink Dispenser: Apr 2024 - May 2024",
        description1: "Designed and implemented a dynamic React application with TailwindCss for an intuitive and responsive user interface.",
        description2: "Developed features for custom drink creation using image recognition and percentage-based selection.",
        description3: "Connected a React frontend to an Arduino system over WiFi, managing a 4 pump, 1 valve liquid dispenser.",
        description4: "Enabled seamless, real-time drink pouring from the web application to a physical container.",
        description5: "Led the development process, ensuring efficient collaboration, organization, and task division among team members."
    },
    {
        title: "Personal Website: April 2023",
        description1: "Created a personal website detailing my work experience, and information about myself utilizing ReactJS.",
        description2: "Accessible at github.com/EtienneRousseau1."
    },
    {
        title: "The Storyboard Initiative: April 2022 - June 2022",
        description1: "Created a website that allowed for high school students to learn more about the business world and the importance of financial literacy. Done utilizing JavaScript.",
        description2: "Accessible at https://tsbini.com/"
    }
];


const contactConfig = {
    YOUR_EMAIL: "erousseau@ucdavis.edu",
    YOUR_FONE: "(510)298-2864",
    description: "Please feel free to contact me at erousseau@ucdavis.edu or through my linkedin or phone number. Always willing to chat!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/EtienneRousseau1",
    linkedin: "https://www.linkedin.com/in/etienne-rousseau-2392811a0/",
};
export {
    meta,
    dataabout,
    skills,
    services,
    introdata,
    projects,
    contactConfig,
    socialprofils,
    logotext,
};