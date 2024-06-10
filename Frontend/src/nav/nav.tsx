import { ReactElement } from 'react'
import notification_icon from "../assets/notification_icon.svg"
import avatar from "../assets/avatar.png"
import hamburger from "../assets/hamburger.png"
import { useUserStore } from '../store'

function Nav(): ReactElement {

    let notifications = useUserStore((state) => state.notifications)

    return (
        <header className='flex justify-end space-x-3 p-2 items-center mb-5'>
            <img src={hamburger} alt="Expand" className='lg:hidden block w-7 h-7 mr-auto cursor-pointer' />
            <div className='flex relative py-1'>
                <img src={notification_icon} alt="Notifications" className='w-7 h-7 cursor-pointer' />
                <div className='bg-blue-900 absolute -top-1 left-4 rounded-full w-4 h-4 px-1 py-2 text-xs shadow-md text-white flex justify-center items-center'>{notifications}</div>
            </div>
            <img src={avatar} alt="Avatar" className='w-9 h-9 cursor-pointer' />
        </header>
    )
}

export default Nav