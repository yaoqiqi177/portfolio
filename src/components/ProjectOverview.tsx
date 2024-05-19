import Tag from './Tag.tsx'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { COMPONENT_MAPPING } from '../App.tsx'

interface ProjectOverview {
  company: string
  website: string
  application: keyof typeof COMPONENT_MAPPING
  description: string
  image: string
  techs: string[]
}

const ProjectOverview = (props: {
  project: ProjectOverview
  reverse: boolean
  openModal: (application: keyof typeof COMPONENT_MAPPING) => void
}) => {
  const { project, reverse, openModal } = props

  return (
    <motion.div
      className={`flex flex-col lg:flex-row p-2 space-y-6 gap-6 ${reverse ? 'lg:flex-row-reverse' : ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/*Image*/}
      <div className="flex-1 rounded-lg hover:scale-105 h-96">
        <img className="object-fill" src={project.image} alt="" />
      </div>
      {/*Description*/}
      <div className="flex-1 p-2 space-y-6">
        <div
          onClick={() => openModal(project.application)}
          className="text-4xl text-almond-frost-900 flex gap-2 items-center hover:text-almond-frost-500 hover:underline cursor-pointer"
        >
          <span className=""> {project.application}</span>{' '}
          <a>
            <FaExternalLinkAlt size={30} />
          </a>
        </div>

        <div className="text-xl font-medium">{project.description}</div>
        <div className="flex flex-wrap">
          {project.techs.map((tech: string) => (
            <Tag key={tech} text={tech}></Tag>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectOverview
