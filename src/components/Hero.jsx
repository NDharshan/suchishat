
import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <span className="capitalize">Enliven your events with</span>
        <br />
        <span className="uppercase text-orange-700">Suchishat</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-black
          font-medium text-xs leading-tight uppercase text-black
          rounded-full shadow-md bg-orange hover:bg-black
          hover:text-white"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Host your Event
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border  border-black
        font-medium text-xs leading-tight uppercase text-black
        bg-white
        rounded-full shadow-md bg-transparent hover:bg-black
        hover:text-white"
        >
          Back Events
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Events</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
