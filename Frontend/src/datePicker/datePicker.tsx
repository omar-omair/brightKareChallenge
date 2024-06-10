import { ReactElement, useState } from 'react';
import Icon from '../icon';
import timeline from './../assets/timeline.png'
import left_arrow from './../assets/left-arrow.png'
import right_arrow from './../assets/right-arrow.png'
import { useDateStore } from '../indexes/store'
import { DESKTOP_W } from '../indexes/constants';



const DatePicker = ({ futureLocked }: { futureLocked: boolean }): ReactElement => {

    let currentDate: Date = useDateStore((state) => state.currentDate) //reading current date from zustand store

    const days: Date[] = getDaysArray(currentDate.getFullYear(), currentDate.getMonth());
    const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const changeMonth = (num: number) => {

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();


        // Calculate the new month and year
        let newYear = currentYear;
        let newMonth = currentMonth + num;

        if (newYear >= new Date().getFullYear() && newMonth > new Date().getMonth() && futureLocked) {
            return
        }

        // Check if the new month is beyond December
        if (newMonth > 11) {
            newMonth = 0; // January is 0 in the Date object 
            newYear += 1; // Increment the year
        }
        // Check if the new month is before January
        else if (newMonth < 0) {
            newMonth = 11; // December is 11 in the Date object
            newYear -= 1; // Decrement the year
        }

        // Set the new date with new year and month
        const newDate = new Date(newYear, newMonth, 1);
        useDateStore.setState({ currentDate: newDate });
    }

    return (
        <div className={`bg-white rounded-md shadow-sm p-4 pb-20 w-mobile lg:w-desktop aspect-[1]`}>

            <header className='flex w-full items-center justify-between mb-6'>
                <div className="flex space-x-3 items-center">
                    <Icon url={timeline} size={10} />
                    <h3 className='font-semibold italic text-lg'>Timeline</h3>
                </div>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer'>Edit</p>
            </header>

            <div className='px-6'>
                <div className='flex font-semibold justify-between  items-center mb-10'>
                    <img src={left_arrow} alt="decrement date" className='active:opacity-60 cursor-pointer w-4 h-4' onClick={() => changeMonth(-1)} />
                    <p className='text-xl'>{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</p>
                    <img src={right_arrow} alt="increment date" className='active:opacity-60 cursor-pointer w-4 h-4' onClick={() => changeMonth(1)} />
                </div>

                <div className="grid grid-cols-7 gap-3">
                    {weekdays.map(day => (
                        <div key={day} className='text-weekDay flex center justify-center'>{day}</div>
                    ))}

                    {days.map((day, index) => (

                        // grey out future days if the DatePicker is future locked
                        futureLocked && currentDate.getFullYear() == new Date().getFullYear() && currentDate.getMonth() == new Date().getMonth() && index > new Date().getDate() - 1 ? (
                            <div key={index} className={`flex place-self-center h-7 aspect-square items-center justify-center text-sub_gray cursor-pointer`}>
                                {day.getDate()}
                            </div>
                        ) : (
                            <div key={index} className={`cursor-pointer h-7 hover:text-blue-600 place-self-center flex aspect-square items-center justify-center ${index === currentDate.getDate() - 1 ? " text-selectedDay bg-outer_ellipse rounded-full shadow-md" : ""}`} onClick={() => useDateStore.setState({ currentDate: day })}>
                                {day.getDate()}
                            </div>
                        )

                    ))}

                </div>
            </div>
        </div >

    );

}

const getDaysArray = (year: number, month: number): Date[] => {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}



export default DatePicker;