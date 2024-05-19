import { motion } from 'framer-motion'

const InfoPanel = () => {
  return (
    <div className="text-center bg-gradient-to-r text-white from-almond-frost-700 to-almond-frost-300 h-96 rounded-2xl px-20">
      {/*title*/}
      <div className="font-bold text-4xl py-10">
        Hi, I'm Qiqi. Nice to meet you!
      </div>

      {/*simple introduction*/}
      <motion.div
        initial={{
          x: -1000
        }}
        animate={{
          x: 0
        }}
        transition={{ duration: 0.5 }}
        className="py-3 text-xl"
      >
        I have been doing web-development for 4 years and focused on front-end
        for 2+ years.
        <br />
        <br />I enjoy create web applications that can be both aesthetics and
        effective to help people's life more convenient, and assist their work
        in an automated way
      </motion.div>
    </div>
  )
}

export default InfoPanel
