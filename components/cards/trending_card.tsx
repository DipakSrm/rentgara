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


    return (
        <>
            <div
                className="w-full grid grid-rows-3  hover:translate-y-[-5%] transition-transform duration-300 ease-in-out"

            >
                <div className="row-span-2 flex justify-center items-center relative hover:cursor-pointer ">
                    <Image src={veh_img} alt="this is image" height={100} width={100} />
                </div>

                <div className="bg-secondary p-2 flex flex-col gap-2 row-span-1">
                    <div className="flex justify-between items-center primary_font_family">
                        <h1 className="primary_font_family lg:text-sm md:text-sm ">{vehicle}</h1>
                        <div className="flex justify-start items-center gap-2">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-4" />
                            <span>{ratings}</span>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap">
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