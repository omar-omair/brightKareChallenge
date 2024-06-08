import { ReactElement } from "react"
import { cardProps } from "../types"

export default function Card({ value, unit, name }: cardProps): ReactElement {

    console.log(`Card ${value} with ${unit} and ${name}`)

    return (
        <>
            <div className="Card bg-white flex">
                <img src="\" alt="" />
                <p>{name} : {value} {unit}</p>
            </div>
        </>

    )
}