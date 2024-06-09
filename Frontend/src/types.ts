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