import HT from '../../assets/images/healthterm.png'

const Semantic = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-2">
      {/*  Image*/}

      <div className="h-auto w-[900px] flex justify-center">
        <img className="object-cover" src={HT} alt="" />
      </div>

      <div className="italic">
        Image of the application is limited due to propriety reasons
      </div>

      <div className="my-2">
        <span className="font-bold italic">Application</span>: Rhapsody Semantic
        (Previous named as 'Healthterm')
      </div>
      <div>
        <span className="font-bold italic">Company</span>:{' '}
        <a
          className="text-almond-frost-700 hover:text-almond-frost-500 hover:underline"
          href="https://rhapsody.health/solutions/terminology-management/"
        >
          Rhapsody Health
        </a>{' '}
        ( May. 2022 – Jan. 2024)
      </div>
      {/*Description*/}
      <div className="my-4 px-10 flex-col flex gap-4">
        <div>I mainly work on 2 projects.</div>
        <div>
          <span className="font-extrabold">Rhapsody Semantics</span>: Web
          application, which is used by staffs in healthcare organizations /
          doctors, to manage medical terminology terms, they import, export,
          create, manage new concept, and create mapping between international
          medical codes and localized medical codes.
        </div>
        <div>
          <span className="font-extrabold">Careterms</span>: Web application
          written for internal employees, to validate whether or not concepts
          crawled online are the synonyms of specific medical codes, where
          simple filter and sorting is applied
        </div>
        <div className="font-bold text-2xl mt-2">Achievements:</div>
        <ul className="list-disc mt-1">
          <li>
            {' '}
            Migrate legacy frontend (jQuery, Ractive, JSP) to Vue3 (Partially)
          </li>
          <li> Design and documents Restful API in swagger</li>
          <li>Help with main features in consecutive big releases</li>
          <li>
            <a
              className="text-almond-frost-700 hover:text-almond-frost-500 hover:underline"
              href="https://rhapsody.health/blog/introducing-lyniate-healthterm-version-15-2-powerful-new-features-to-support-the-evolution-of-mappings/"
            >
              Feature 'Mapset Versioning', 'MenuBar'
            </a>
          </li>

          <li>
            <a
              className="text-almond-frost-700 hover:text-almond-frost-500 hover:underline"
              href="https://rhapsody.health/blog/manage-versions-and-workflows-with-improved-visibility-and-usability-in-rhapsody-semantic-15-3/"
            >
              Feature 'Namespace versioning, Workflow management'
            </a>
          </li>
          <li>
            Help develop tools (careterms) for internal content engineers to
            validate medical synonyms
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Semantic
