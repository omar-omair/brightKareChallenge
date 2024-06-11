import { ReactElement } from 'react'
import { useSideBarStore } from '../indexes/store'
import SideEntry from './sideEntry'
import doctor from '../assets/doctor.png'

function Sidebar(): ReactElement {

    let entries = useSideBarStore((state) => state.entries)

    return (
        <div className='h-full overflow-hidden  bg-side_bar_bg shadow-lg py-20 mr-10'>
            <header className='flex space-x-5 items-center justify-start px-4 mb-16'>
                <img src="" alt="" />
                <img src={doctor} alt="" className='rounded-full w-20 aspect-square' />
                <p className='text-white text-xl font-semibold'>Feras Ali Alhazmi</p>
            </header>

            <div className='flex flex-col'>
                {entries.map((entry, index) => (
                    <SideEntry key={index} content={entry.content} position={index} />
                ))}
            </div>


        </div>
    )
}

export default Sidebar