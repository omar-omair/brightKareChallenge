import { ReactElement, useState } from "react";
import { cardProps } from "../types"
import Card from "./card"
import weight from "./../assets/weight.png"


export default function Records(): ReactElement {

    let [cards, setCards] = useState<cardProps[]>([{ unit: "Kg", name: "Weight", value: "100", url: `${weight}` }, { unit: "Kg", name: "Weight", value: "100", url: `${weight}` }])


    return (
        <>
            <div className="p-2 flex overflow-hidden items-center justify-start space-x-5">
                {cards.map((card, index) => (
                    <Card key={index} value={card.value} name={card.name} unit={card.unit} url={card.url} />
                ))}
            </div>

        </>
    )
}