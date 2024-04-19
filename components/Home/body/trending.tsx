import Trending_Card from "@/components/cards/trending_card"
import { faCar, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface details_props {
    id: number,
    vehicle: string,
    name: string,
    veh_img: string,
    profile: string,
    address: string,
    ratings: number,
}
export default function Trending() {
    const data: details_props[] = [
        {
            id: 1,
            vehicle: "Maruti Suzuki",
            name: "Hari",
            veh_img: "/car.png",
            profile: "/profile.png",
            address: "Urlabari",
            ratings: 4.5,

        }, {
            id: 2,
            vehicle: "Maruti Van",
            name: "Krishna",
            veh_img: "/van.png",
            profile: "/newprofile.png",
            address: "Damak",
            ratings: 4.5,

        }, {
            id: 3,
            vehicle: "Maruti MiniTruck",
            name: "Gopanl",
            veh_img: "/minitruck.png",
            profile: "/newprofile.png",
            address: "Pathri",
            ratings: 4.5,

        }, {
            id: 4,
            vehicle: "Maruti tripper",
            name: "Sankar",
            veh_img: "/tripper.png",
            profile: "/newprofile.png",
            address: "Gauradha",
            ratings: 4.5,

        }, {
            id: 5,
            vehicle: "Maruti Tempo",
            name: "Sita",
            veh_img: "/tempo.png",
            profile: "/newprofile.png",
            address: "Madhumalla",
            ratings: 4,

        }, {
            id: 6,
            vehicle: "Maruti Safari",
            name: "Gita",
            veh_img: "/safari.png",
            profile: '/newprofile.png',
            address: "Kanepokhari",
            ratings: 4.5,

        },
    ]
    return (
        <>
            <section id="trending" className="flex flex-col gap-4">
                <div className="w-full mx-auto bg-secondary flex items-center justify-between py-2 px-4">
                    <div className="primary_font_family flex gap-4 items-center">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Trending Rentals</span>
                    </div>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faChevronLeft} className="bg-secondary " /><FontAwesomeIcon icon={faChevronRight} className="bg-secondary " />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 smg:grid-rows-6 p-4">
                    {data.map((details) => {
                        return (
                            <div key={details.id}>
                                <Trending_Card {...details} />
                            </div>
                        )
                    })}
                </div>
            </section></>
    )
}