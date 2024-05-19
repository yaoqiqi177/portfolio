import mqs1 from '../../assets/images/mqs.png'
import mqs2 from '../../assets/images/mqs_2.png'

const MQS = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-2">
      {/*  Image*/}

      <div className="h-auto w-[900px]">
        <img className="object-cover" src={mqs1} alt="" />
      </div>

      <div className="my-2">
        <span className="font-bold italic">Application</span>: MQS Dashboard
      </div>
      <div>
        <span className="font-bold italic">Company</span>:{' '}
        <a
          className="text-almond-frost-700 hover:text-almond-frost-500 hover:underline"
          href="https://blog.mqs.dk/posts/4_mqs_dashboard_release/new_dashboard_release/"
        >
          Molecular Quantum Solutions
        </a>{' '}
        ( Jul. 2020 – Nov. 2020)
      </div>
      {/*Description*/}
      <div className="my-4 px-10 flex-col gap-6">
        <div className="my-4">
          I mainly work on the MQS dashboard for the frontend part.
        </div>
        <div className="my-4">
          I work with the backend developer, using react to develop the
          dashboard for chemistry engineers.
        </div>
        <div className="my-4">
          They can use the dashboard to search for, visualize in 2D and 3D, look
          up various properties, do calculations for chemical atoms
        </div>

        <div className="h-auto w-[900px]">
          <img className="object-cover" src={mqs2} alt="" />
        </div>
        <div className="italic">
          Image is extracted from{' '}
          <a
            className="text-almond-frost-700 hover:text-almond-frost-500 hover:underline"
            href="https://blog.mqs.dk/posts/4_mqs_dashboard_release/new_dashboard_release/"
          >
            MQS website
          </a>
          , some changes in the UI is applied since I left
        </div>

        <div className="font-bold text-2xl mt-4 mb-1">Achievements:</div>
        <ul className="list-disc mt-1 flex-col flex gap-2">
          <li>
            Scaffolding the basic structure of the initial dashboard of MQS with
            another frontend developer
          </li>
          <li>Help visualize atom structures using Plotly and 3Dmol.js</li>
        </ul>
      </div>
    </div>
  )
}

export default MQS
