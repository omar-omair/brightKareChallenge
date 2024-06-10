import { ReactElement } from "react";
import Card from "./card"
import { useUserStore } from "../indexes/store";



export default function Records(): ReactElement {

    let cards = useUserStore((state) => state.records)


    return (
        <>
            <div className={`w-mobile sm:max-w-lg lg:w-desktop2 grid grid-cols-2 min-w-32 gap-5 lg:flex  lg:items-center lg:justify-start`}>
                {cards.map((card, index) => (
                    <Card key={index} value={card.value} name={card.name} unit={card.unit} url={card.url} />
                ))}
            </div>

        </>
    )
}