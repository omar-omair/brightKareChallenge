import { ReactElement, useState } from "react";
import { cardProps } from "../types"
import Card from "./card"


export default function Records(): ReactElement {

    let [cards, setCards] = useState<cardProps[]>([{ unit: "Kg", name: "Weight", value: "100" }])


    return (
        <>
            <div>
                {cards.map((card, index) => (
                    <Card key={index} value={card.value} name={card.name} unit={card.unit} />
                ))}
            </div>

        </>
    )
}