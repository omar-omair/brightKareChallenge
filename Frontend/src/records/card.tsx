import { ReactElement } from "react"
import { cardProps } from "../indexes/types"
import Icon from "./../icon"

export default function Card({ value, unit, name, url }: cardProps): ReactElement {

    console.log(`Card ${value} with ${unit} and ${name}`)

    return (
        <>
            <div className="bg-white cursor-pointer flex p-3 space-x-3 items-center rounded-xl shadow-sm w-[12.5rem] lg:w-[15rem] flex-grow-0 flex-shrink-0">
                <Icon url={url} size={16} />
                <div className="text-left">
                    <h3 className="leading-8 font-semibold">{value} <span className="text-xs text-sub_gray">{unit}</span></h3>
                    <p className="text-xs text-sub_gray">{name}</p>
                </div>
            </div>
        </>

    )
}