import { locationData, vehicleData } from "@/utils/data";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



type FilterState = {
    vehicle: boolean;
    location: boolean;
    manufacturer: boolean;
    features: boolean;
};
export default function Filter() {
    const [filterExtension, setFilterExtension] = useState<FilterState>({
        vehicle: false,
        location: false,
        manufacturer: false,
        features: false
    });

    const toggleView = (filter: keyof FilterState) => {
        setFilterExtension(prev => ({
            ...prev,
            [filter]: !prev[filter]
        }));
    };

    return (
        <div className="flex flex-col gap-2 h-auto" id="filter">
            <div className="">
                <div className="flex items-center justify-between">
                    <h1 className="primary_font_family my-4 font-semibold">Vehicles</h1>
                    <FontAwesomeIcon icon={faChevronDown} className={`transform transition-transform ease-in-out duration-300 ${filterExtension.vehicle ? 'rotate-180' : ''}`} onClick={() => toggleView('vehicle')} />
                </div>
                <div className={`overflow-hidden ${!filterExtension.vehicle ? 'h-0' : 'h-auto'}`}>
                    {vehicleData.map((item, index) => (
                        <div key={index} className={`flex gap-2  items-center transition-transform duration-300 ease-in-out ${!filterExtension.vehicle ? 'translate-y-[-25vh]' : 'translate-y-0'}`}>
                            <input type="checkbox" name={item.name} id={item.name} />
                            <label htmlFor={item.name}>{item.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="">
                <div className="flex items-center justify-between">
                    <h1 className="primary_font_family my-4 font-semibold">Location</h1>
                    <FontAwesomeIcon icon={faChevronDown} className={`transform transition-transform ease-in-out duration-300 ${filterExtension.location ? 'rotate-180' : ''}`} onClick={() => toggleView('location')} />
                </div>
                <div className={`overflow-hidden ${!filterExtension.location ? 'h-0' : 'h-auto'}`}>
                    {locationData.map((item, index) => (
                        <div key={index} className={`flex gap-2  items-center transition-transform duration-300 ease-in-out ${!filterExtension.location ? 'translate-y-[-30vh]' : 'translate-y-0'}`}>
                            <input type="checkbox" name={item.name} id={item.name} />
                            <label htmlFor={item.name}>{item.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div id="manufacturer" className=""></div>
            <div id="features" className=""></div>
        </div>
    );
}
