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
                    <div className="flex gap-4">

                        <div className="flex justify-evenly relative items-center">
                            <input type="text" placeholder="What car you looking for.." className=" text-black font-light outer-box py-3 px-[5rem] " id="search_box_home" />
                            <FontAwesomeIcon className="w-[2rem] absolute right-[5%] " icon={faSearch} />
                        </div>
                        <button className=" outer-box py-3 px-8 bg-secondary font-bold text-lg hover:bg-black hover:text-secondary">Search</button>
                    </div>
                </div>
                <div className="col-span-1 w-full ">
                    <Image src={Truck} alt="Truck Image" height={1000} width={1000} />


                </div>
            </section>
        </>
    )
}