import { ReactElement } from 'react'
import { useUserStore } from '../indexes/store'
import Icon from '../icon'
import pill from '../assets/meds.png'
import MedEntry from './medEntry'

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

            <div className='p-2'>

                <table className="table-auto w-full overflow-hidden">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Medication Name</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Dosage</th>
                            <th className="px-4 py-2">Frequency</th>
                            <th className="px-4 py-2">Prescribing Physician</th>
                            <th className="px-4 py-2">Start Date</th>
                            <th className="px-4 py-2">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, index) => (
                            <tr>
                                <MedEntry key={index} name={entry.name} status={entry.status} dosage={entry.dosage}
                                    frequency={entry.frequency} prescribing_physician={entry.prescribing_physician}
                                    start_date={entry.start_date} end_date={entry.end_date}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default Medication