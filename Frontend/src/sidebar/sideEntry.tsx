import { ReactElement } from 'react'
import { sideProps } from '../indexes/types'
import { useSideBarStore } from '../indexes/store'
import profile from '../assets/profile.png'

function SideEntry({ content, position }: sideProps): ReactElement {

    let selectedIndex = useSideBarStore((state) => state.selectedEntryIndex)

    return (
        <>
            {
                position == selectedIndex ?

                    <div className='flex cursor-pointer items-center space-x-6 border-l-[6px] bg-picked border-white border-solid px-9 py-8'>
                        <img src={profile} alt="profile icon" className='w-8 aspect-square' />
                        <p className='text-white font-semibold text-xl'>{content}</p>
                    </div>

                    :
                    <div className='flex cursor-pointer items-center space-x-6 px-9 py-8 hover:bg-picked'>
                        <img src={profile} alt="profile icon" className='w-8 aspect-square' />
                        <p className='text-white font-semibold text-xl'>{content}</p>
                    </div>
            }
        </>
    )
}

export default SideEntry