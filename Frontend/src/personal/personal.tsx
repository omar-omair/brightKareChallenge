import { ReactElement, useState } from 'react'
import avatar from '../assets/avatar.png'
import { personalProps, tagProps } from '../types'
import cig from '../assets/cig.png'
import phone from '../assets/phone-call.png'
import mail from '../assets/mail.png'
import Tag from './tag'

function Personal({ name, age, gender, email, phone_number, address, job }: personalProps): ReactElement {
    let redBg: string = "#FEF8F8"
    let redFont: string = "#C50000"
    let blueBg: string = "#F8FBFE"
    let blueFont: string = "#004080"

    const [diaTags, setDiaTags] = useState<tagProps[]>([{ content: 'Sugar', backgroundColor: redBg, fontColor: redFont }, { content: 'Sugar', backgroundColor: redBg, fontColor: redFont }, { content: 'Sugar', backgroundColor: redBg, fontColor: redFont }, { content: 'Sugar', backgroundColor: redBg, fontColor: redFont }])
    const [barTags, setBarTags] = useState<tagProps[]>([{ content: 'Sugar', backgroundColor: blueBg, fontColor: blueFont }, { content: 'Sugar', backgroundColor: blueBg, fontColor: blueFont }])

    return (
        <div className='aspect-[0.36] ml-2 mt-5 w-[25rem] rounded-lg bg-white overflow-auto shadow-md flex justify-start flex-col'>
            <header className='flex w-full items-center justify-end p-4 mb-10'>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer mt-[1rem]'>Edit</p>
            </header>
            <div className='flex items-center relative justify-center flex-col space-y-4 mb-10'>
                <img src={avatar} alt="avatar" className='w-32 aspect-square mb-4' />
                <div className=' bg-cig_bg absolute -top-[1rem] left-[14.5rem] rounded-full w-8 h-8 px-1 py-2 text-xs shadow-md text-white flex justify-center items-center'>
                    <img src={cig} alt="cigar" className='h-4 w-4' />
                </div>
                <p className='text-xl'>{name || "Ali"}</p>
            </div>
            <div className='grid grid-cols-2 place-self-center mb-10 gap-x-32 gap-y-10 '>
                <div className='place-self-center'>
                    <p>{gender || "Male"}</p>
                    <p className='text-sub_tag leading-8'>Gender</p>
                </div>
                <div className='place-self-center'>
                    <p>{age || "38"}</p>
                    <p className='text-sub_tag leading-8'>Age</p>
                </div>
                <div className='place-self-center'>
                    <p>{address || "Riyadh"}</p>
                    <p className='text-sub_tag leading-8'>Address</p>
                </div>
                <div className='place-self-center'>
                    <p>{job || "Accountant"}</p>
                    <p className='text-sub_tag leading-8'>Job</p>
                </div>
            </div>
            <div className='place-self-start px-8 py-4'>
                <p className='text-xl font-bold'>Contact Information</p>
                <div className='flex items-center p-4 space-x-4'>
                    <img src={phone} alt="" className='h-5 w-5' />
                    <p className='text-lg'>{phone_number}</p>
                </div>
                <div className='flex items-center p-4 space-x-4'>
                    <img src={mail} alt="" className='h-5 w-5' />
                    <p className='text-lg'>{email}</p>
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