import { useState } from 'react';
import Icon from '../icon';
import timeline from './../assets/timeline.png'

const DatePicker = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const days: Date[] = getDaysArray(currentDate.getFullYear(), currentDate.getMonth());
    const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const changeMonth = (num: number) => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        // Calculate the new month and year
        let newYear = currentYear;
        let newMonth = currentMonth + num;

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

        // Set the new date with potentially new year and month
        const newDate = new Date(newYear, newMonth, 1);
        setCurrentDate(newDate);
    }

    console.log(currentDate)

    return (
        <div className='bg-white ml-2 mt-2 rounded-md shadow-sm p-3 w-[23.25rem]'>
            <header className='flex w-full items-center justify-between p-4 mb-3'>
                <div className="flex space-x-3 items-center">
                    <Icon url={timeline} size={10} />
                    <h3 className='font-semibold italic text-lg'>Timeline</h3>
                </div>
                <p className='text-xs text-gray-600 font-semibold opacity-60 cursor-pointer'>Edit</p>
            </header>
            <div className='flex font-semibold justify-center items-center mb-4'>
                <p>{currentDate.getMonth()} {currentDate.getFullYear()}</p>
            </div>
            <div className="grid  grid-cols-7 gap-0">
                {weekdays.map(day => (
                    <div key={day}>{day}</div>
                ))}

                {days.map((day, index) => (
                    <div key={index} onClick={() => setCurrentDate(day)}>
                        {day.getDate()}
                    </div>
                ))}

            </div>
        </div>

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