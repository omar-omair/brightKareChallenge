import { ReactElement } from 'react'
import Icon from '../icon'
import timeline from './../assets/timeline.png'

function TimeLine(): ReactElement {
    return (
        <div className="w-[23.25rem] aspect-[0.72] ml-2 overflow-auto flex flex-col shadow-sm rounded-lg bg-white mt-5">
            <div>
                <header className='flex space-x-3 items-center justify-start p-2 py-3'>
                    <Icon url={timeline} size={10} />
                    <h3 className='font-semibold italic text-lg'>Timeline</h3>
                    <p className='text-xs ml-auto text-sub_gray'>Edit</p>
                </header>
            </div>
        </div>
    )
}

export default TimeLine