import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    apple,
    spark, 
    nuance,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../src/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJs Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Nuance Communications",
      icon: nuance,
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2023",
      points: [
        "Incoming Summer internship experience. "
      ],
    },

    {
      title: "Software Developer",
      company_name: "Boston University Spark! Fellowship",
      icon: spark,
      iconBg: "#E6DEDD",
      date: "January 2023 - May 2023",
      points: [
        "Developed a full-stack web application with a team of five using React, Firebase, and Scrum methodology that addresses stigmatized topics within women’s health by educating users through the aggregation of relevant articles, concise summaries, and resources onto a personalized dashboard.",   
        "Executed agile development methodologies during a 10-week sprint, utilizing Jira to monitor sprint progress and product backlogs.",  
        "Wrote python scripts that leverage third party APIs such as NewsAPI and OpenAI to retrieve/summarize articles from user queries to enhance user experience, invoking such scripts into the app using Firebase Cloud Functions." 
      ],
    },

    {
      title: "Product Zone Specialist",
      company_name: "Apple",
      icon: apple,
      iconBg: "#383E56",
      date: "November 2022 - February 2023",
      points: [
        "Leveraged extensive technical expertise to consult with 50+ customers per day and determine the optimal Apple product for their unique needs, generating about $10k+ revenue per day.",
        "Provided comprehensive support for hardware specifications, iCloud integration, efficient data transfer and backup operations by keeping wait times under 1 hour, and seamless carrier activation processes.",
        "Actively promoted a positive and collaborative work environment, thereby fostering the dynamic atmosphere intrinsic to the Apple Retail experience."
      ],
    },
  ];
  
  const projects = [
    {
      name: "HualiDiscount",
      description:
        "Web-based platform that allows users to browse for clothes and add/remove items from cart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/IvanYangg/Ecommerce-Website-Template-Project",
    },
    {
      name: "Stake the Stigma",
      description:
        "Developed a full-stack web application with a team of five using React, Firebase, and Scrum methodology that addresses stigmatized topics within womens health by educating users through the aggregation of relevant articles, concise summaries, and resources onto a personalized dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/elaineleiyoung/StakeTheStigma",
    },
  ];
  
  export { services, technologies, experiences, projects };