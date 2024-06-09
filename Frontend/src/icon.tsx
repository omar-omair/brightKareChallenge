import { ReactElement } from 'react'

function Icon({ url, size }: { url: string, size: number }): ReactElement {

    return (
        <div style={{ width: `${size / 4}rem`, height: `${size / 4}rem` }} className={"rounded-full bg-icon_bg flex items-center justify-center"}>
            <img src={url} alt="" className="w-5 h-5" />
        </div >
    )
}

export default Icon