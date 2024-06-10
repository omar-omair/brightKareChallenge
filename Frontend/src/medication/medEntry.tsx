import React, { ReactElement } from 'react'
import { medProps } from '../indexes/types'

function medEntry(props: medProps): ReactElement {

    let fontColor = ""
    let backgroundColor = ""

    if (props.status == "Active") {
        fontColor = "#68E33D"
        backgroundColor = "#D7F8CC"
    }

    else if (props.status == "Discontinued") {
        fontColor = "#FFCCCC"
        backgroundColor = "#FF3D3D"
    }
    else {
        fontColor = "#D1DCE8"
        backgroundColor = "#3F6F9F"
    }


    return (

        <>
            <td className="border px-4 py-2 text-center border-none bg-icon_bg">{props.name}</td>
            <td className="border px-4 py-2 text-center border-none ">
                <span style={{ backgroundColor: backgroundColor, color: fontColor }} className="px-2 inline-flex text-xl leading-5 font-semibold rounded-full">
                    {props.status}
                </span>
            </td>
            <td className="border px-4 py-2 text-center border-none bg-icon_bg">{props.dosage}</td>
            <td className="border px-4 py-2 text-center border-none">{props.frequency}</td>
            <td className="border px-4 py-2 text-center border-none bg-icon_bg">{props.prescribing_physician}</td>
            <td className="border px-4 py-2 text-center border-none">{props.start_date || "-"}</td>
            <td className="border px-4 py-2 text-center border-none bg-icon_bg">{props.end_date || "-"}</td>
        </>
    )
}

export default medEntry