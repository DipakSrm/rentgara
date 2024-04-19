import { faLocation, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
interface details_props {
    id: number,
    vehicle: string,
    name: string,
    veh_img: string,
    profile: string,
    address: string,
    ratings: number,
}
export default function Trending_Card({ id,
    vehicle,
    name,
    veh_img,
    profile,
    address,
    ratings }: details_props
) {
    const [Hovered, setHovered] = useState(false);
    console.log(Hovered)
    return (
        <>
            <div className="w-full grid grid-rows-3">
                <div className="row-span-2 flex justify-center items-center relative">
                    <Image src={veh_img} alt="this is image" height={100} width={100} />
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-50 transition-opacity duration-300" onMouseEnter={() => setHovered(!Hovered)}></div>
                    <button className={`primary_font_family absolute px-4 py-2 outer-box bg-black text-white translate-y-[-150%] text-sm ${Hovered ? 'opacity-100 translate-y-0 ease-in-out duration-300' : 'opacity-0 hidden'} z-10`}>Add to Cart</button>
                </div>

                <div className="bg-secondary p-2 flex flex-col gap-2 row-span-1">
                    <div className="flex justify-between items-center primary_font_family">
                        <h1 className="primary_font_family lg:text-sm md:text-sm ">{vehicle}</h1>
                        <div className="flex justify-start items-center gap-2">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-4" />
                            <span>{ratings}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center justify-start gap-2">
                            <Image
                                src={profile}
                                alt="this is image"
                                width={100}
                                height={100}
                                className="rounded-full" // Apply the rounded-full class for a circular shape
                                style={{ width: "5vh", height: "5vh" }} // Set the width and height to maintain the circular shape
                            />
                            <span className="secondary_font_family">{name}</span>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <FontAwesomeIcon icon={faLocation} />
                            <span className="secondary_font_family">{address}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}