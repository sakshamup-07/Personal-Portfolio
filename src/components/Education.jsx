import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({
  index,
  institution,
  degree,
  year,
  location,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <img
      src={image}
      alt={institution}
      className='w-16 h-16 rounded-full object-cover mb-4 mx-auto'
    />
    <h3 className='text-white font-bold text-[22px] text-center'>{institution}</h3>
    <p className='text-secondary text-[16px] mt-2 text-center'>{degree}</p>
    <p className='text-white text-[14px] mt-2 text-center'>{year}</p>
    <p className='text-white text-[14px] mt-2 text-center'>{location}</p>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-10 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education.map((item, index) => (
          <EducationCard key={item.institution} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");