import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { services } from "../index";
import { fadeIn, textVariant } from "../motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        I am a sophomore studying computer science at Boston University. I'm pretty proficient in React and NoSQL databases like Firebase, having worked on a few projects, and am also familiar with scrum meetings, sprint cycles, agile methodology, and Jira software through my experience as a software developer at my university's Spark! Innovation Fellowship. I also have experience with objected-oriented languages like Java, and scripting in Python. Currently, I'm also working on learning the MERN stack and AWS through maintaining and revamping the member portal for Phi Chi Theta Zeta Chapter. I'm also on the tech team for BostonHacks, an organization that hosts annual hackathons every November to hackers all around Boston, Massachusetts, and even around the United States, and am responsible for assisting the creation of the website and application systems. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");