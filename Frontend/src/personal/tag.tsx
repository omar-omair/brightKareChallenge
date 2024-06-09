import { ReactElement } from 'react'

function Tag({ content }: { content: "String" }): ReactElement {
    return (
        <div className={``}>{content}</div>
    )
}

export default Tag