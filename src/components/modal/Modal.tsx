import './Modal.css'
import { useEffect } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
const Modal = (props: {
  children: React.ReactNode
  closeModal: () => void
}) => {
  useEffect(() => {
    // Block scrolling when modal is opened
    document.body.style.overflow = 'hidden'

    // Cleanup function to reset the overflow property when the modal is closed
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const { children, closeModal } = props
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="titleCloseButton my-2" onClick={closeModal}>
          <span className="hover:scale-110 hover:text-almond-frost-300 text-almond-frost-700">
            <IoCloseCircleOutline size={30} />
          </span>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
