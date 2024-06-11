export interface cardProps {
    value: string,
    unit: string,
    name: string,
    url: string
}

export interface timeLineProps {
    title: string,
    desc: string,
    date: Date,
    backgroundColor?: string,
    position?: number,
    last?: number
}

export interface historyProps {
    history_name: string,
    description: string,
    backgroundColor?: string,
}

export interface personalProps {
    name: string,
    gender: string,
    age: number,
    address?: string,
    job?: string,
    phone_number: string,
    email: string
}

export interface tagProps {
    content: string,
    backgroundColor?: string,
    fontColor: string,
}

export interface medProps {
    name: string,
    status: string
    dosage: string,
    frequency: string,
    prescribing_physician: string,
    start_date?: Date,
    end_date?: Date,
}

export interface sideProps {
    content: string,
    position?: number,
    url?: string
}

interface barriers {
    barrier_name: string
}

interface history {
    history_name: string,
    description: string
}

interface measaurements {
    measurement_on: Date,
    measaurement_type: string,
    measaurement_unit: string,
    measurement_value: string
}

interface medications {
    medication: medication
    status: string,
    frequency: string,
    dosage: string,
    prescribing_physician: prescribing_physician,
    start_date: Date,
    end_date: Date
}

interface diseases {
    disease_name: string
}

interface medication {
    medication_name: string
}

interface prescribing_physician {
    name: string
}

export interface userData {
    name: string,
    sex: string,
    dob: Date,
    phone_number: string,
    email: string,
    barriers: barriers[],
    diseases: diseases[]
    history: history[],
    mesaurements: measaurements[],
    medications: medications[]

}