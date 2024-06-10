import { ReactElement, useState } from 'react'
import Icon from '../icon'
import history from './../assets/history.png'
import HistoryEntry from './historyEntry'
import { useUserStore } from '../indexes/store'

function History(): ReactElement {

    const historyEntries = useUserStore((state) => state.historyEntries)
    return (
        <div className={`w-mobile lg:w-desktop aspect-[1] flex-shrink-0 ml-2 overflow-auto flex flex-col shadow-sm rounded-lg bg-white mt-5`}>
            <header className='flex w-full items-center justify-between p-4 mb-3'>
                <div className="flex space-x-3 items-center">
                    <Icon url={history} size={10} />
                    <h3 className='font-semibold italic text-lg'>Medical History</h3>
                </div>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer'>Edit</p>
            </header>
            <div className='p-4'>
                {historyEntries.map((historyEntry, index) => (
                    <HistoryEntry key={index} title={historyEntry.title}
                        desc={historyEntry.desc} backgroundColor={`${index % 2 !== 0 ? "bg-icon_bg" : ""}`} />
                ))}
            </div>
        </div>
    )
}

export default History