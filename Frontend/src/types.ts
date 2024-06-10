export interface cardProps {
    value: string,
    unit: string,
    name: string,
    url: string
}

export interface timeLineProps {
    title: string,
    desc: string,
    date: string,
    backgroundColor?: string,
    position?: number,
    last?: number
}

export interface historyProps {
    title: string,
    desc: string,
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

export interface medicationProps {
    name: string,
    status: string
    dosage: string,
    frequency: string,
    prescribing_physician: string,
    start_date: string,
    end_date: string,
}