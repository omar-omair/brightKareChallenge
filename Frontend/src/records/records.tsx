import { ReactElement, useState } from "react";
import { cardProps } from "../types"
import Card from "./card"
import weight from "./../assets/weight.png"
import { useUserStore } from "../store";
import { MOBILE_W } from "../constants";


export default function Records(): ReactElement {

    let cards = useUserStore((state) => state.records)


    return (
        <>
            <div className={`w-[${MOBILE_W}rem] sm:max-w-lg lg:max-w-full ml-2 grid grid-cols-2 min-w-32 gap-5 lg:flex overflow-hidden lg:w-full lg:items-center lg:justify-start`}>
                {cards.map((card, index) => (
                    <Card key={index} value={card.value} name={card.name} unit={card.unit} url={card.url} />
                ))}
            </div>

        </>
    )
}