import Teton from '../../assets/images/teton.png'

const TetonAlert = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-2">
      {/*  Image*/}

      <div className="h-auto w-[900px]">
        <img className="object-cover" src={Teton} alt="" />
      </div>

      <div className="my-2">
        <span className="font-bold italic">Application</span>: Teton Alert
      </div>
      <div>
        <span className="font-bold italic">Company</span>:{' '}
        <a
          className="text-almond-frost-700 hover:text-almond-frost-500 hover:underline"
          href="https://www.teton.ai/da"
        >
          Teton.ai
        </a>{' '}
        (Feb. 2024 – Present)
      </div>
      {/*Description*/}
      <div className="my-4 px-10 flex flex-col gap-2">
        <div>
          The application has both a desktop version (React in NextJS) and a
          mobile version (React Native).
        </div>
        <div>
          This application is targeted for staff at care-homes and nurses at
          hospitals.
        </div>
        <div>
          A device with camera is installed in the patient’s room and record
          videos. The AI engineer and Computer vision engineer applies trained
          model to analyze patient event and reflect through patient’s image
          card, and displays to the staff simultaneously.
        </div>

        <div className="font-bold text-2xl mt-2">Achievements:</div>
        <ul className="list-disc mt-1">
          <li> Optimize patient cards’ styles</li>
          <li> Various animation for patients’ state changes</li>
          <li>
            Add more features to patient’s activity widget, and some other UX /
            UI optimization
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TetonAlert
