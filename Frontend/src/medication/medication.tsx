import { ReactElement } from 'react'
import { useUserStore } from '../indexes/store'
import Icon from '../icon'
import pill from '../assets/meds.png'

function Medication(): ReactElement {

    let entries = useUserStore((state) => state.medications)

    return (
        <div className={`w-mobile lg:w-desktop3 flex-shrink-0 overflow-auto flex flex-col shadow-sm rounded-lg bg-white`}>
            <header className='flex w-full items-center justify-between p-4 mb-3'>
                <div className="flex space-x-3 items-center">
                    <Icon url={pill} size={10} />
                    <h3 className='font-semibold italic text-lg'>Timeline</h3>
                </div>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer'>Edit</p>
            </header>
        </div>
    )
}

export default Medication