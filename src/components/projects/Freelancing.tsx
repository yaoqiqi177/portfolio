import restaurant1 from '../../assets/images/restaurant.jpg'
import restaurant2 from '../../assets/images/freelancing.png'

const Freelancing = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-2 text-almond-frost-700">
      {/*Description*/}
      <div className="my-4 px-10 flex-col gap-4">
        <div className="my-6 text-3xl">
          <div>I help 2 restaurants do some landing page</div>
          <div>To display their menus, contact informations, etc.</div>
        </div>
        {/*  Image*/}

        <div className="h-auto w-[900px] my-4">
          <img className="object-cover" src={restaurant1} alt="" />
        </div>

        <div className="h-auto w-[900px]">
          <img className="object-cover" src={restaurant2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Freelancing
