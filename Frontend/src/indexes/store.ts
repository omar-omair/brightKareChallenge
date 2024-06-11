import { create } from "zustand"
import { cardProps, historyProps, tagProps, timeLineProps, personalProps, sideProps, medProps } from "./types"
import bmi from '../assets/bmi.png'
import weight from '../assets/weight.png'
import height from '../assets/height.png'
import pressure from '../assets/pressure.png'

type userStore = {
    info: personalProps,
    diaTags: tagProps[],
    barTags: tagProps[]
    historyEntries: historyProps[],
    timeEntries: timeLineProps[],
    records: cardProps[]
    medications: medProps[],
    notifications: number,
    getServerProps: () => void,

    /*

    Wont be needed for this challenge:

    Update Meds
    Update tags
    etc....

    */
}

type dateStore = {
    currentDate: Date
    weekdays: string[],
    reorderDays: () => void
}

type sideBarStore = {
    entries: sideProps[],
    selectedEntryIndex: number,
}

export const useDateStore = create<dateStore>((set) => ({
    currentDate: new Date(),
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    reorderDays: (): void => {
        const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let startIndex: number = useDateStore.getState().currentDate.getDay();

        const orderedWeekdays: string[] = [ // this array will be used to render the correct weekdays for each month
            ...weekdays.slice(startIndex),
            ...weekdays.slice(0, startIndex)
        ];

        useDateStore.setState({ weekdays: orderedWeekdays })
    }

}))

export const useUserStore = create<userStore>((set) => ({
    info: {
        name: "N/A",
        gender: "N/A",
        age: 0,
        address: "N/A",
        email: "N/A",
        job: "N/A",
        phone_number: "N/A"
    },

    diaTags: [],
    barTags: [],
    historyEntries: [],
    timeEntries: [],
    records: [{ unit: "", name: "BMI", value: "N/A", url: bmi }, { unit: "Kg", name: "Weight", value: "N/A", url: weight }, { unit: "Cm", name: "Height", value: "N/A", url: height }, { unit: "", name: "Blood P", value: "N/A", url: pressure }],
    notifications: 0,
    medications: [],

    getServerProps: () => {
        let PData: personalProps = {
            name: "N/A",
            gender: "N/A",
            age: 0,
            address: "N/A",
            email: "N/A",
            job: "N/A",
            phone_number: "N/A"
        }



    }
}))

export const useSideBarStore = create<sideBarStore>((set) => ({
    entries: [{ content: "Profile", url: "/dashboard" }],
    selectedEntryIndex: 0,
}))