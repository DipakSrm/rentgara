import Image from "next/image";
import Truck from "@/public/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TypewriterEffectSmooth } from "../ui/typewriter_effect";
export default function Home() {
    const words = [
        {
            text: "Filter",
        },
        {
            text: "by",
        },
        {
            text: "type,",
        },
        {
            text: "brand",
        },
        {
            text: "or avaibility..",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <>
            <section id="home" className="grid grid-cols-3 w-[90%] h-[90vh] place-items-center grid-rows-1  items-center gap-4 mx-auto">
                <div className="col-span-2 w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl primary_font_family">
                            Explore top quality rental cars for your journey
                        </h1>
                        <TypewriterEffectSmooth words={words} />
                    </div>

                </div>
                <div className="col-span-1 w-full ">
                    <Image src={Truck} alt="Truck Image" height={1000} width={1000} />


                </div>
            </section>
        </>
    )
}