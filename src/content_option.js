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
    description: "I am a current second year student at UC Davis, interested in software development, machine learning, and programming ",
};

const dataabout = {
    title: "About myself",
    aboutme: "Hi! My name is Etienne Rousseau. I was born and raised in the Bay Area, and since high school I have developed a passion for coding. I first began by creaitng personal websites for friends, and started working with others on small projects. I then further developed my software skills through work experience learing important skills in React, Python, and C++ and personal projects where I have learned more about machine learning. As a current second year student at UC Davis studying Computer Science, I have further developed my love for programming and problem solving. In my free time I enjoy hanging out with my friends, working out, and playing with my dog"
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
        value: 85,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "C#",
        value: 75,
    },
];

const services = [{
        title: "Pampa Technologies: June 2022 - September 2023",
        description1: "Developed a website to manage waste servieces for Chevron, utilizing AngularJS, C#, and Azure Devops connecting server side information onto an easy to display website",
        description2: "Redesigined a web application to allow easier access of information on robots and creating access of this inofmrmation online. Utilzied ReactJS and Python to connect the robots to cloud servers"
    },
    {
        title: "Code Lab: January 2023 - June 2023",
        description1: "Creating an app with a team of developers and designers to help UC Davis students better deal with mental health and anxiety alongside having uplifting messages and a space for students to input their moods",
        description2: "Used ReactJS, Express, and MongoDB to gather user data and create an interactive UI for students to organize their thoughts and accomplishments made throughout the day",
    },
];

const projects = [{
    title: "SMAILY July 2023 - August 2023",
    description1: "Simple AI application using Chat GPT's API",
    description2: "Accessible at github.com/EtienneRousseau1"
},
{
    title: "Personal Website April 2023",
    description1: "Created a personal website detailing my work experience, and information about myself utilzing ReactJS",
    description2: "Accessible at github.com/EtienneRousseau1"
},
{
    title: "The Storyboard Intiative April 2022 - June 2022",
    description1: "Created a website that allowed for high school students to learn more about the business world and the importance of financial literacy. Done utilzing javascript",
    description2: "Accessible at https://tsbini.com/"
}];

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
    facebook: "https://www.facebook.com/etienne.rousseau.75/",
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