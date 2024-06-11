import { ReactElement } from 'react'
import Icon from '../icon'
import timeline from './../assets/timeline.png'
import TimeEntry from './timeEntry'
import { useDateStore, useUserStore } from '../indexes/store'


function TimeLine(): ReactElement {

    let timeEntries = useUserStore((state) => state.timeEntries)
    let currentDate = useDateStore((state) => state.currentDate)

    return (
        <div className={`w-mobile lg:w-desktop lg:h-desktop2 min-h-[62.5rem] flex-shrink-0 overflow-auto flex flex-col shadow-sm rounded-lg bg-white`}>
            <header className='flex w-full items-center justify-between p-4 mb-3'>
                <div className="flex space-x-3 items-center">
                    <Icon url={timeline} size={10} />
                    <h3 className='font-semibold italic text-lg'>Timeline</h3>
                </div>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer'>Edit</p>
            </header>
            <div>
                {timeEntries.map((timeEntry, index) => (
                    areDatesEqual(timeEntry.date, currentDate) && // renders the time line entries for the selected date only
                    <TimeEntry key={index} title={timeEntry.title} date={timeEntry.date}
                        desc={timeEntry.desc} backgroundColor={`${index % 2 !== 0 ? "bg-icon_bg" : ""}`}
                        position={index} last={timeEntries.length - 1} />
                ))}
            </div>
        </div>
    )
}

function areDatesEqual(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

export default TimeLine