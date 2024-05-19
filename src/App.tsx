import Navbar from './components/Navbar'
import InfoPanel from './components/InfoPanel'
import ProjectOverview from './components/ProjectOverview'
import { projects } from './components/helpers.ts'
import TetonAlert from './components/projects/TetonAlert.tsx'
import Semantic from './components/projects/Semantic.tsx'
import MQS from './components/projects/MQS.tsx'
import Freelancing from './components/projects/Freelancing.tsx'
import { useEffect, useState } from 'react'
import Modal from './components/modal/Modal.tsx'
import BottomBar from './components/BottomBar.tsx'

export const COMPONENT_MAPPING = {
  'Teton Alert': <TetonAlert />,
  'Rhapsody Semantics': <Semantic />,
  'MQS Dashboard': <MQS />,
  'Restaurant landing website': <Freelancing />
}

function App() {
  const [showModal, setShowModal] = useState<React.ReactNode | null>(null)
  const openModal = (application: keyof typeof COMPONENT_MAPPING) => {
    const component = COMPONENT_MAPPING[application]
    setShowModal(component)
  }

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowModal(null)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleEsc)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <>
      {showModal && (
        <Modal closeModal={() => setShowModal(null)}>{showModal}</Modal>
      )}
      <div className="px-10 pb-10 xl:px-24">
        {/*Navigation Bar*/}
        <Navbar />

        {/*Information Panel about myself*/}
        <InfoPanel />

        {/*Projects list*/}
        <div className="text-4xl text-bold text-center font-extrabold pt-20 pb-10">
          PROJECTS
        </div>
        <div className="flex-col gap-6">
          {projects.map((project, index) => {
            return (
              <ProjectOverview
                project={project}
                key={project.company}
                reverse={index % 2 !== 0}
                openModal={openModal}
              />
            )
          })}
        </div>
      </div>

      {/*Bottom*/}
      <BottomBar />
    </>
  )
}

export default App
