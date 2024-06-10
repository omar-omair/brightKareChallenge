import { ReactElement } from 'react'
import Icon from '../icon'
import timeline from './../assets/timeline.png'
import TimeEntry from './timeEntry'
import { useUserStore } from '../indexes/store'


function TimeLine(): ReactElement {

    let timeEntries = useUserStore((state) => state.timeEntries)

    return (
        <div className={`w-mobile lg:w-desktop aspect-[0.72] flex-shrink-0 ml-2 overflow-auto flex flex-col shadow-sm rounded-lg bg-white mt-5`}>
            <header className='flex w-full items-center justify-between p-4 mb-3'>
                <div className="flex space-x-3 items-center">
                    <Icon url={timeline} size={10} />
                    <h3 className='font-semibold italic text-lg'>Timeline</h3>
                </div>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer'>Edit</p>
            </header>
            <div>
                {timeEntries.map((timeEntry, index) => (
                    <TimeEntry key={index} title={timeEntry.title} date={timeEntry.date}
                        desc={timeEntry.desc} backgroundColor={`${index % 2 !== 0 ? "bg-icon_bg" : ""}`}
                        position={index} last={timeEntries.length - 1} />
                ))}
            </div>
        </div>
    )
}

export default TimeLine