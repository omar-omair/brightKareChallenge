import { ReactElement } from 'react'
import { historyProps } from '../types'
import Icon from '../icon'
import heart from '../assets/heart.png'

function historyEntry({ title, desc, backgroundColor }: historyProps): ReactElement {
    return (
        <div className={`${backgroundColor} h-16 relative flex space-x-3 items-center justify-start px-5`}>
            <Icon size={4} url={heart} />
            <div className='flex flex-col items-start ml-5'>
                <h4 className='leading-5 font-semibold text-sm'>{title}</h4>
                <p className='leading-5 text-xs text-gray-600'>{desc}</p>
            </div>
        </div>
    )
}

export default historyEntry