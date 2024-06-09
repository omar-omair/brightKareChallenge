import { ReactElement } from "react"
import { cardProps } from "../types"

export default function Card({ value, unit, name, url }: cardProps): ReactElement {

    console.log(`Card ${value} with ${unit} and ${name}`)

    return (
        <>
            <div className="bg-white cursor-pointer flex p-3 space-x-3 items-center rounded-xl shadow-sm w-44 flex-grow-0 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-icon_bg flex items-center justify-center">
                    <img src={url} alt="" className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="leading-8">{value} <span className="text-xs text-sub_gray">{unit}</span></h3>
                    <p className="text-xs text-sub_gray">{name}</p>
                </div>
            </div>
        </>

    )
}