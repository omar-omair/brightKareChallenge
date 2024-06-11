import { create } from "zustand"
import { cardProps, historyProps, tagProps, timeLineProps, personalProps, sideProps, medProps, userData, measaurements } from "./types"
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
    getServerProps: (/*username could go here*/) => Promise<void>,

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
    last: number
}

type sideBarStore = {
    entries: sideProps[],
    selectedEntryIndex: number,
    visible: boolean
}


export const useDateStore = create<dateStore>((set) => ({
    currentDate: new Date(),
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    last: 0,
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
        age: "0",
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

    getServerProps: async () => {

        let inputUsername = "Qahtani123" //hardcoded for this challenge

        let userData: userData | null = null

        let diseaseFontColor = "#C50000"

        let diseaseBackground = "#FEF8F8"

        let barrierFontColor = "#004080"

        let barrierBackground = "#F8FBFE"



        try {

            const response = await fetch("http://localhost:3000/dashboard/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: inputUsername })
            });

            if (!response.ok) {
                throw new Error("Internal Server Error");
            }

            userData = await response.json() as userData;

        } catch (error) {
            console.error(error);
        }

        console.log(userData)

        if (userData !== null) {

            let userAge: number = new Date().getFullYear() - new Date(userData.dob).getFullYear() //not that accurate but good enough for this challenge
            let diseases: tagProps[] = []
            let barriers: tagProps[] = []
            let meds: medProps[] = []
            let historyArr: historyProps[] = []

            let heightRecords: measaurements[] = []
            let weightRecords: measaurements[] = []
            let sysRecords: measaurements[] = []
            let diaRecords: measaurements[] = []

            userData.mesaurements.forEach(record => {
                if (record.measaurement_type === "height") {
                    heightRecords.push(record)
                }
                else if (record.measaurement_type === "weight") {
                    weightRecords.push(record)
                }
                else if (record.measaurement_type === "blood_pressure_systolic") {
                    sysRecords.push(record)
                }
                else if (record.measaurement_type === "blood_pressure_diastolic") {
                    diaRecords.push(record)
                }

            })

            let newestHeight: measaurements

            //mapping the backend data to the frontend interfaces
            userData.diseases.forEach(disease => {
                diseases.push({ content: disease.disease_name, fontColor: diseaseFontColor, backgroundColor: diseaseBackground })
            })

            userData.barriers.forEach(barrier => {
                barriers.push({ content: barrier.barrier_name, fontColor: barrierFontColor, backgroundColor: barrierBackground })
            })

            userData.medications.forEach(med => {
                meds.push({
                    name: med.medication.medication_name, status: med.status, frequency: med.frequency,
                    prescribing_physician: med.prescribing_physician.name, dosage: med.dosage, start_date: med.start_date, end_date: med.end_date,
                })
            })

            userData.history.forEach(history => {
                historyArr.push({ history_name: history.history_name, description: history.description })
            })




            useUserStore.setState({

                info: {
                    name: userData.name,
                    gender: userData.sex,
                    age: userAge.toString() + " " + new Date(userData.dob).toString(),
                    address: "N/A", // is not in the user schema of the challenge
                    job: "N/A", // is not in the user schema of the challenge
                    phone_number: userData.phone_number,
                    email: userData.email
                },

                diaTags: diseases,
                barTags: barriers,
                historyEntries: historyArr,
                timeEntries: [{ title: "hardcoded", desc: "this section is hardcoded", date: new Date(2024, 5, 2) }, { title: "hardcoded", desc: "I'm ready for this opportunity <3", date: new Date(2024, 5, 2) }, { title: "hardcoded", desc: "this section is hardcoded", date: new Date(2024, 5, 2) }, { title: "hardcoded2", desc: "this section is hardcoded too", date: new Date(2024, 4, 21) }, { title: "hardcoded", desc: "Hello world!", date: new Date(2024, 5, 2) }, { title: "hardcoded2", desc: "this section is hardcoded too", date: new Date(2024, 4, 21) }], // hardcoded as the challenge did not specify where to get the info from
                medications: meds

            })
        }

    }
}))

export const useSideBarStore = create<sideBarStore>((set) => ({
    entries: [{ content: "Profile", url: "/dashboard" }],
    selectedEntryIndex: 0,
    visible: false
}))