import { ReactElement, useState } from 'react'
import Icon from '../icon'
import timeline from './../assets/timeline.png'
import { timeLineProps } from '../types'
import TimeEntry from './timeEntry'

function TimeLine(): ReactElement {

    const [timeEntries, setTimeEntries] = useState<timeLineProps[]>([{ title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }, { title: "Pre-Diabatic", date: "10 Wed 2024", desc: "A1c: 10.4" }])

    return (
        <div className="w-[23.25rem] aspect-[0.72] flex-shrink-0 ml-2 overflow-auto flex flex-col shadow-sm rounded-lg bg-white mt-5">
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
                        desc={timeEntry.desc} backgroundColor={`${index % 2 !== 0 ? "bg-icon_bg" : ""}`} position={index} last={timeEntries.length - 1} />
                ))}
            </div>
        </div>
    )
}

export default TimeLine