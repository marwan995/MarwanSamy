/* eslint-disable no-unused-vars */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { projects } from '../constants'
import { github } from '../assets'
import { StarWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  return (
      <motion.div variants={fadeIn("up","spring",index*0.5,0.7)}>
        <Tilt 
          options ={{
            max : 45,
            scale : 1,
            speed : 450}}
            className = 'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full rounded-2xl object-cover'/>
            <div className='absolute justify-end inset-0 flex m-3 card-img_hover'>
              <div 
              className=' black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              onClick={() => window.open(source_code_link, "_blank")}  
              >
                  <img src={github} alt="" className=' w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
              <h3 className=' text-white font-bold text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>

          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
  )

}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>my Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p variants={fadeIn("", "", .1, 1)} className=' mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
        <div className='mt-20 flex flex-wrap gap-7'>
          {
            projects.map((project, index) => (

              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))
          }

        </div>
    </>
  )
}

export default StarWrapper(Works, "")