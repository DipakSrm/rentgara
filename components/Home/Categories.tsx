import Image from "next/image"
import car from "../../public/car.png"
import minitruck from "../../public/minitruck.png"
import safari from "../../public/safari.png"
import tempo from "../../public/tempo.png"
import tripper from "../../public/tripper.png"
import van from "../../public/van.png"
export default function Categories() {
    const data = [
        {
            Title: "Car",
            url: car,
        },
        {
            Title: "MiniTruck",
            url: minitruck,
        },
        {
            Title: " Safari",
            url: safari,
        },
        {
            Title: "Tempo ",
            url: tempo,
        },
        {
            Title: "Tripper ",
            url: tripper,
        },
        {
            Title: "Van",
            url: van,
        },
    ]
    return (
        <>
            <h1 className="text-center primary_font_family my-8 text-xl">
                Vehicles Catagories
            </h1>
            <div className="grid lg:grid-cols-6 w-[90%] mx-auto  items-center gap-6 md:grid-cols-2 sm:grid-cols-1 ">
                {data.map((i) => {
                    return (
                        <div key={i.Title} className="flex justify-center items-center gap-4 flex-col px-4 py-8 bg-secondary shadow">

                            <p className="">{i.Title}</p>
                            <div className="max-h-full">
                                <Image src={i.url} alt={"this is " + `${i.Title}` + "Image"} height={100} width={100} style={{ height: "auto", width: "auto" }} />
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}