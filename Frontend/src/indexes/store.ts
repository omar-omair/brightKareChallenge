import { create } from "zustand"
import { cardProps, historyProps, medicationProps, tagProps, timeLineProps, personalProps } from "./types"
import bmi from '../assets/bmi.png'
import weight from '../assets/weight.png'
import height from '../assets/height.png'
import pressure from '../assets/pressure.png'

type recordStore = {

}

type userStore = {
    info: personalProps,
    diaTags: tagProps[],
    barTags: tagProps[]
    historyEntries: historyProps[],
    timeEntries: timeLineProps[],
    records: cardProps[]
    medications: medicationProps[],
    notifications: number,

    /*

    Wont be needed for this challenge:

    Update Meds
    Update tags
    etc....

    */
}

type dateStore = {
    currentDate: Date
}

export const useDateStore = create<dateStore>((set) => ({
    currentDate: new Date()
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
}))