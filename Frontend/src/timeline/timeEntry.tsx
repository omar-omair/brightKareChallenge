import { ReactElement } from 'react'
import { timeLineProps } from '../indexes/types'

function TimeEntry({ title, date, desc, backgroundColor, position, last }: timeLineProps): ReactElement {

    let height: string = "100%" // this is the height of the blue line
    let top: string = "0" // this is the top position of the blue line

    let weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    if (position == 0 || position == last) {
        height = "50%" // if the element is the first or the last the line should be half the entry length
        if (position == 0) {
            top = "50%" // the first element's line should start at the circle
        }
    }

    return (
        <div className={`${backgroundColor} h-16 relative flex items-center justify-start px-5`}>
            <div>
                <p className='leading-5 text-xs w-12 text-gray-600 font-semibold'>{date.getDate()} {weekdays[date.getDay()]} {date.getFullYear()}</p>
            </div>
            <div className='h-full flex items-center ml-3'>
                <div className=' rounded-full w-5 h-5 bg-outer_ellipse flex justify-center items-center'>
                    <div className=' rounded-full w-2 h-2 z-10 bg-blue-600'></div>
                </div>
                <div style={{ height: `${height}`, top: `${top}` }} className={`w-[0.15rem] left-[88.75px] bg-blue-600 absolute z-0`}></div>
            </div>
            <div className='flex flex-col items-start ml-5'>
                <h4 className='leading-5 font-semibold text-sm'>{title}</h4>
                <p className='leading-5 text-xs text-gray-600'>{desc}</p>
            </div>
        </div>
    )
}

export default TimeEntry