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
        backgroundColor = "#FFCCCC"
        fontColor = "#FF3D3D"
    }
    else {
        fontColor = "#D1DCE8"
        backgroundColor = "#3F6F9F"
    }

    let start_date = "-"
    let end_date = "-"

    if (props.start_date !== undefined) {
        start_date = props.start_date.toString().split("T")[0]
    }

    if (props.end_date != null) {
        end_date = props.end_date.toString().split("T")[0]
    }

    return (

        <>
            <td className="px-4 py-2 text-center bg-icon_bg">{props.name}</td>
            <td className="px-4 py-2 text-center flex justify-center">
                <span style={{ backgroundColor: backgroundColor, color: fontColor }} className="w-48 h-12 flex items-center justify-center px-2 py-2 text-xl leading-5 shadow-sm font-semibold rounded-xl">
                    {props.status}
                </span>
            </td>
            <td className="px-4 py-2 text-center  bg-icon_bg">{props.dosage}</td>
            <td className="px-4 py-2 text-center">{props.frequency}</td>
            <td className="px-4 py-2 text-center  bg-icon_bg">{props.prescribing_physician}</td>
            <td className="px-4 py-2 text-center">{start_date || "-"}</td>
            <td className="px-4 py-2 text-center  bg-icon_bg">{end_date || "-"}</td>
        </>
    )
}

export default medEntry