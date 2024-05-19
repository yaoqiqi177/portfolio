import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const BottomBar = () => {
  return (
    <div
      id="bottom"
      className="mt-20 h-64 bg-almond-frost-400 flex flex-rol items-center justify-center py-20 px-10 gap-6"
    >
      <a href="https://www.linkedin.com/in/qiqiyao-799462176/">
        <CiLinkedin
          size={30}
          className="hover:scale-105 cursor-pointer hover:text-almond-frost-300"
        />
      </a>

      <a href="mailto:“yaoqiqi_96@yeah.net”">
        <MdOutlineEmail
          size={30}
          className="hover:scale-105 cursor-pointer hover:text-almond-frost-300"
        />
      </a>

      <a href="https://github.com/feiyangmeiyu">
        <FaGithub
          size={30}
          className="hover:scale-105 cursor-pointer hover:text-almond-frost-300"
        />
      </a>
    </div>
  )
}

export default BottomBar
