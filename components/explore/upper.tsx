import { locationData, vehicleData } from "@/utils/data";
import { faCalendarDays, faClock, faLocation, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
interface DateProps {
    justdate: Date | null;
    datetime: Date | null;
}

interface ControlProps {
    dateOpen: boolean;
    timeOpen: boolean;
}
export default function Upper() {


    const [date1, setDate1] = useState<DateProps>({
        justdate: new Date(),
        datetime: null,
    });

    const [control1, setControl1] = useState<ControlProps>({
        dateOpen: false,
        timeOpen: false,
    });
    const [date2, setDate2] = useState<DateProps>({
        justdate: new Date(),
        datetime: null,
    });

    const [control2, setControl2] = useState<ControlProps>({
        dateOpen: false,
        timeOpen: false,
    });
    const [location, setlocation] = useState('')
    const getlocation = (e: any) => {
        const selected = e.target.value;
        setlocation(selected)
    }
    console.log("this is location", location)
    const formatDate = (date: Date | null): string => {
        if (!date) return ''; // Return empty string if date is null
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formattedDate;
    };
    const time_numbers: string[] = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"];
    //function declaration for setting time
    const getTime1 = (e: any) => {
        const selected = e.target.value;
        setDate1((prev) => (
            {
                ...prev, datetime: selected
            }
        ))
    }
    const getTime2 = (e: any) => {
        const selected = e.target.value;
        setDate2((prev) => (
            {
                ...prev, datetime: selected
            }
        ))
    }
    return (
        <>
            <div className="grid lg:grid-cols-10 w-full lg:grid-rows-1 gap-2">
                <div className="lg:col-span-2  w-full flex items-center gap-2 p-1 border bg-gray-500 shadow width_423_span_1 rounded-md md:col-span-1 col-span-2 row-span-1 max-width-423">
                    <div className=" mx-auto">
                        <FontAwesomeIcon icon={faLocation} className=' text-white w-[2rem] lg:w-[1rem] xl:w-[1rem] h-auto' />
                    </div>
                    <input className="p-4 w-[70%] mx-auto rounded-md padding_423px" placeholder="Location" list="location" onChange={getlocation} />
                    <datalist id="location">
                        {locationData.map((item) => {
                            return (
                                <option value={item.name} key={item.name} />
                            )
                        })}
                    </datalist>
                </div>
                <div className="lg:col-span-2  w-full flex items-center gap-2 p-1 border bg-gray-500 shadow width_423_span_1 rounded-md md:col-span-1 col-span-2 row-span-1 max-width-423">
                    <div className="mx-auto ">
                        <FontAwesomeIcon icon={faTruck} className=' text-white w-[2rem] lg:w-[1rem] xl:w-[1rem] h-auto' />
                    </div>
                    <input className="p-4 w-[70%] mx-auto rounded-md padding_423px" placeholder="Vehicle" list="vehicle" onChange={getlocation} />
                    <datalist id="vehicle">
                        {vehicleData.map((item) => {
                            return (
                                <option value={item.name} key={item.name} />
                            )
                        })}
                    </datalist>
                </div>

                {/* this section is for chossing starting date of reservation */}
                <div className="lg:col-span-3 w-full flex border items-center gap-2 mx-auto bg-gray-500 shadow rounded-md col-span-2 row-span-1 width_423_span_2 ">
                    <div className=' flex items-center gap-2 justify-center '>
                        {!control1.dateOpen && date1.justdate ? (
                            <div className=" ">
                                <FontAwesomeIcon className='p-4 w-[2rem] h-auto text-blue-200' icon={faCalendarDays} onClick={() => setControl1(prevState => ({ ...prevState, dateOpen: true }))} />
                            </div>
                        ) : (
                            <div className=" z-10  ">
                                <Calendar
                                    onClickDay={(selectedDate) => {
                                        setDate1(prev => ({ ...prev, justdate: selectedDate }));
                                        setControl1(prev => ({ ...prev, dateOpen: false }));
                                    }}
                                    value={date1.justdate}
                                    minDate={new Date()}
                                    view="month"
                                    className={`shadow-lg  rounded-md px-8 py-4 font-bold absolute `}

                                />
                            </div>
                        )}

                        {date1.justdate ? (
                            <div className=" lg:text-sm md:text-[1rem] text-white font-semibold">{formatDate(date1.justdate)}</div>
                        ) : (
                            <div className={`md:text-[1rem]  text-white font-semibold lg:text-sm ${control1.dateOpen ? 'hidden' : 'block'}`}>mm/dd/year</div>
                        )}
                    </div>
                    {/* time of booking */}
                    <div className='flex items-center gap-2 lg:p-4 md:p-4 p-1 overflow-hidden'>
                        <div className=' '>
                            <FontAwesomeIcon icon={faClock} className='w-[2rem] h-auto text-white' />
                        </div>

                        <select name="Time" id="time" className='text-sm remove_border font-semibold rounded-md lg:p-2 md:p-2 p-1' onChange={getTime1}>
                            {time_numbers.map((number, index) => (
                                <option value={number} key={index} className='remove_border  '>{number}</option>
                            ))}
                        </select>




                    </div>
                </div>
                {/* this section is for chossing returning date of reservation */}
                <div className="lg:col-span-3 w-full flex border items-center gap-2 mx-auto bg-gray-500 shadow rounded-md col-span-2 row-span-1   width_423_span_2">
                    <div className=' flex items-center gap-2 justify-center '>
                        {!control2.dateOpen && date2.justdate ? (
                            <div className=" ">
                                <FontAwesomeIcon className='p-4  w-[2rem] h-auto text-blue-200' icon={faCalendarDays} onClick={() => setControl2(prevState => ({ ...prevState, dateOpen: true }))} />
                            </div>
                        ) : (
                            <div className=" z-10  ">
                                <Calendar
                                    onClickDay={(selectedDate) => {
                                        setDate2(prev => ({ ...prev, justdate: selectedDate }));
                                        setControl2(prev => ({ ...prev, dateOpen: false }));
                                    }}
                                    value={date2.justdate}
                                    minDate={date1.justdate ? date1.justdate : new Date()}
                                    view="month"
                                    className={`shadow-lg  rounded-md px-8 py-4 font-bold absolute `}

                                />
                            </div>
                        )}

                        {date2.justdate ? (
                            <div className=" lg:text-sm md:text-[1rem] text-white font-semibold">{formatDate(date2.justdate)}</div>
                        ) : (
                            <div className={`md:text-[0.5rem] text-white font-semibold  lg:text-sm ${control2.dateOpen ? 'hidden' : 'block'}`}>mm/dd/year</div>
                        )}
                    </div>
                    {/* time of booking */}
                    <div className='flex items-center gap-2 lg:p-4 md:p-4 p-1 overflow-hidden'>
                        <div className=' '>
                            <FontAwesomeIcon icon={faClock} className='w-[2rem] h-auto text-white' />
                        </div>

                        <div className=''>
                            <select name="Time" id="time" className='text-sm remove_border font-semibold rounded-md lg:p-2 md:p-2 p-1 ' onChange={getTime2}>
                                {time_numbers.map((number, index) => (
                                    <option value={number} key={index} className='remove_border '>{number}</option>
                                ))}
                            </select>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}