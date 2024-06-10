import './style/App.css'
import Records from './records/records'
import Nav from './nav/nav'
import TimeLine from './timeline/timeline'
import DatePicker from './datePicker/datePicker'
import History from './history/history'
import Personal from './personal/personal'
import Sidebar from './sidebar/sidebar'
import { useUserStore } from './indexes/store'

function App() {

  let user = useUserStore()

  return (
    <>
      <div className='flex max-lg:flex-col max-lg:items-center'>
        <div className=' w-1/5 hidden lg:block min-h-full min-w-mobile'>
          <Sidebar />
        </div>
        <div id="container" className={`flex flex-col flex-shrink-0 space-y-5`}>
          <Nav />
          <div className='p-0'>
            <p className='text-[48px] text-side_bar_bg leading-none'>{`Hello, ${user.info.name}`}</p>
            <p className='text-xs text-sub_title ml-[0.2rem]'>check what is new</p>
          </div>

          <div className='flex space-x-10'>
            <button className='font-semibold bg-side_bar_bg shadow-xl hover:bg-white hover:text-side_bar_bg w-48 text-white rounded-xl py-3 px-5'>My Profile</button>
            <button className='font-semibold text-sub_tag'>My Plans</button>
          </div>



          <div className='grid grid-cols-3 grid-rows-[auto_1fr_1fr] items-start gap-4 mb-10'>

            <div className='col-start-1 col-span-2 row-start-1'>
              <Records />
            </div>

            <div className='col-start-1 col-span-1 row-start-2 row-span-2'>
              <TimeLine />
            </div>

            <div className='col-start-2 col-span-1 row-start-2'>
              <DatePicker futureLocked={true} />
            </div>

            <div className='col-start-2 col-span-1 row-start-3'>
              <History />
            </div>

            <div className='col-start-3 col-span-1 row-start-1 row-span-3'>
              <Personal />
            </div>
          </div>


        </div>
      </div>



    </>

  )
}

export default App
