import { ReactElement } from 'react'
import { tagProps } from '../indexes/types'

function Tag({ content, fontColor, backgroundColor }: tagProps): ReactElement {
    let properties: string = `bg-[${backgroundColor}] text-[${fontColor}]`

    return (

        <div style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}`, /*border: `solid 1px ${fontColor}`*/ }} className={`font-semibold shadow-sm rounded-full w-fit px-2 py-1 overflow-hidden`}>{content}</div>
    )
}

export default Tag