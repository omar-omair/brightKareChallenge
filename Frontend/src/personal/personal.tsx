import { ReactElement } from 'react'
import avatar from '../assets/avatar.png'
import cig from '../assets/cig.png'
import phone from '../assets/phone-call.png'
import mail from '../assets/mail.png'
import Tag from './tag'
import { useUserStore } from '../indexes/store'

function Personal(): ReactElement {
    /*
    let redBg: string = "#FEF8F8"
    let redFont: string = "#C50000"
    let blueBg: string = "#F8FBFE"
    let blueFont: string = "#004080"
    */

    let info = useUserStore((state) => state.info)
    const diaTags = useUserStore((state) => state.diaTags)
    const barTags = useUserStore((state) => state.barTags)

    return (
        <div className={`aspect-[0.36] ml-2 mt-5 w-mobile lg:w-desktop rounded-lg bg-white overflow-auto shadow-md flex justify-start flex-col`}>
            <header className='flex w-full items-center justify-end p-4 mb-10'>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer mt-[1rem]'>Edit</p>
            </header>
            <div className='flex items-center relative justify-center flex-col space-y-4 mb-10'>
                <img src={avatar} alt="avatar" className='w-32 aspect-square mb-4' />
                <div className=' bg-cig_bg absolute lg:-top-[1rem] lg:left-[16.5rem] -top-[1rem] left-[15rem] rounded-full w-8 h-8 px-1 py-2 text-xs shadow-md text-white flex justify-center items-center'>
                    <img src={cig} alt="cigar" className='h-4 w-4' />
                </div>
                <p className='text-xl'>{info.name}</p>
            </div>
            <div className='grid grid-cols-2 place-self-center mb-10 gap-x-32 gap-y-10 '>
                <div className='place-self-center'>
                    <p>{info.gender}</p>
                    <p className='text-sub_tag leading-8'>Gender</p>
                </div>
                <div className='place-self-center'>
                    <p>{info.age}</p>
                    <p className='text-sub_tag leading-8'>Age</p>
                </div>
                <div className='place-self-center'>
                    <p>{info.address}</p>
                    <p className='text-sub_tag leading-8'>Address</p>
                </div>
                <div className='place-self-center'>
                    <p>{info.job}</p>
                    <p className='text-sub_tag leading-8'>Job</p>
                </div>
            </div>
            <div className='place-self-start px-8 py-4'>
                <p className='text-xl font-bold'>Contact Information</p>
                <div className='flex items-center p-4 space-x-4'>
                    <img src={phone} alt="" className='h-5 w-5' />
                    <p className='text-lg'>{info.phone_number}</p>
                </div>
                <div className='flex items-center p-4 space-x-4'>
                    <img src={mail} alt="" className='h-5 w-5' />
                    <p className='text-lg'>{info.email}</p>
                </div>
            </div>

            <div className='place-self-start w-full px-8 py-4 flex flex-col items-start space-y-5'>
                <p className='text-xl font-bold'>Own Diagnosis</p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    {diaTags.map((tag, index) => (
                        <Tag key={index} content={tag.content} fontColor={tag.fontColor} backgroundColor={tag.backgroundColor} />
                    ))}
                </div>

            </div>

            <div className='place-self-start w-full items-start px-8 py-4 flex flex-col space-y-5'>
                <p className='text-xl font-bold'>Health Barriers</p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-5'>
                    {barTags.map((tag, index) => (
                        <Tag key={index} content={tag.content} fontColor={tag.fontColor} backgroundColor={tag.backgroundColor} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Personal