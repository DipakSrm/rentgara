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

    const getTime = (remainingTime: number): any => {
        let seconds = Math.floor(remainingTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        const final_second = seconds % 60;
        const final_minutes = minutes % 60;
        const final_hours = hours % 24;

        return (
            <>
                <div className="timer_style primary_font_family text-xl">{days}</div><span className="text-white primary_font_family">:</span>
                <div className="timer_style primary_font_family text-xl">{final_hours}</div><span className="text-white primary_font_family">:</span>
                <div className="timer_style primary_font_family text-xl">{final_minutes}</div><span className="text-white primary_font_family">:</span>
                <div className="timer_style primary_font_family text-xl">{final_second}</div>
            </>
        );
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
                <div className="flex justify-center items-center gap-2 flex-col bg-black p-4">
                    <h1 className="text-xl primary_font_family text-white">Limited Time Offer</h1>
                    <p className="text-sm secondary_font_family text-white">Ends Soon</p>
                    <div className=" flex justify-center items-center p-4 gap-2">
                        {Time === 0 ? <p className="text-red-400 primary_font_family bg-white p-4">Offer Expired!!</p> : getTime(Time)}
                    </div>
                </div>


            </section>
        </>
    );
}
