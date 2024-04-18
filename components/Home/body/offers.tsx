import Offer_Card from "@/components/cards/offer_card";
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

interface OffersProps {
    deadline: number;
}
interface Offer_Data_Props {
    id: number,
    Title: string,
    Sub_Title: string,
    Offer_Des: string,
    img_url: string
}


export default function Offers({ deadline }: OffersProps) {
    const [Time, setTime] = useState<number>(deadline);
    const data: Offer_Data_Props[] = [{
        id: 1,
        Title: "Car",
        Sub_Title: "Special Discount",
        Offer_Des: "20% Off",
        img_url: "/car.png"
    },
    {
        id: 2,
        Title: "Minitruck",
        Sub_Title: "Special Discount",
        Offer_Des: "20% Off ",
        img_url: "/minitruck.png"
    }]
    useEffect(() => {
        if (Time > 0) {
            const timer = setTimeout(() => {
                setTime(Time - 1000);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [Time]);

    const getTime = (remainingTime: number): string => {
        let seconds = Math.floor(remainingTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        const final_second = seconds % 60;
        const final_minutes = minutes % 60;
        const final_hours = hours % 24;

        return `${days}: ${final_hours} : ${final_minutes} : ${final_second}`;
    };

    return (
        <>
            <section id="offers " className="flex flex-col gap-4">
                <div className="bg-secondary p-2 flex justify-center items-center gap-4 primary_font_family">
                    <FontAwesomeIcon icon={faCar} />
                    Special Offers</div>

                <div className="grid gap-4">
                    {data.map((details) => {
                        return (
                            <Offer_Card key={details.id} {...details} />
                        )
                    })}
                </div>
                {Time === 0 ? `Offer Expired` : getTime(Time)}

            </section>
        </>
    );
}
