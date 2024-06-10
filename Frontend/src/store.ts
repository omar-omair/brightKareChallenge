import { create } from "zustand"
import { cardProps, historyProps, tagProps, timeLineProps } from "./types"

type recordStore = {

}

type userStore = {
    name: string,
    gender: string,
    age: number,
    address: string,
    email: string,
    job: string,
    phone_Number: string,
    diaTags: tagProps[],
    barTags: tagProps[]
    historyEntries: historyProps[],
    timeEntries: timeLineProps[],
    records: cardProps[]
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
    name: "N/A",
    gender: "N/A",
    age: 0,
    address: "N/A",
    email: "N/A",
    job: "N/A",
    phone_Number: "N/A",
    diaTags: [],
    barTags: [],
    historyEntries: [],
    timeEntries: [],
    records: [],
    notifications: 0,
}))