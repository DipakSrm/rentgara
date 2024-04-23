import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Truck from '@/public/home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faLocation, faMagnifyingGlass, faTruck } from '@fortawesome/free-solid-svg-icons';
import { TypewriterEffectSmooth } from '../ui/typewriter_effect';
import backgroundImage from "@/public/back1.jpg"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface DateProps {
    justdate: Date | null;
    datetime: Date | null;
}

interface ControlProps {
    dateOpen: boolean;
    timeOpen: boolean;
}

export default function Home() {

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
    console.log("this is the selected time", date1.datetime)
    console.log("this is the selected time2", date2.datetime)
    console.log("this is just date", control1.dateOpen)
    console.log("this is the date", date1.justdate)
    console.log("this is just date2", control2.dateOpen)
    console.log("this is the date2", date2.justdate)
    return (
        <>
            <section id="home" className="grid lg:grid-cols-3  relative my-[1rem]  md:grid-cols-3 lg:grid-rows-3 md:grid-rows-3 grid-cols-3 w-[100%] mt-[15vh] h-auto lg:h-[90vh] place-items-center items-center gap-4 mx-auto">
                <div className='lg:col-span-3 lg:row-span-3 absolute left-[0%] right-0 w-full top-0 z-[-1]'>
                    <Image src={backgroundImage} alt='background image' height={1000} width={1500} style={{ width: '100%', height: '100vh' }} />
                </div>
                <div className=" lg:col-span-2 md:col-span-2 md:row-span-1 lg:row-span-1 col-span-3 flex flex-col lg:mt-[10rem] md:mt-[10rem] mt-[4rem] w-[90%] mx-auto">
                    <h1 className='lg:text-4xl md:text-2xl text-2xl primary_font_family '>
                        Explore top quality rental cars for your journey
                    </h1>
                    <TypewriterEffectSmooth
                        words={[
                            { text: 'Best' },
                            { text: 'vehicle' },
                            { text: 'service' },
                            { text: 'available' },
                            { text: 'in  Nepal.', className: 'text-red-500 dark:text-red-500 ' },
                        ]}
                    />
                </div>
                <div className="lg:col-span-1 md:col-span-1   col-span-3 w-[90%] mx-auto">
                    <Image src={Truck} alt="Truck Image" height={1000} width={1000} />
                </div>


                <div className=" grid lg:grid-cols-10 gap-4 grid-cols-2 lg:grid-rows-3 lg:h-auto lg:gap-1 md:grid-rows-4 row-span-2 col-span-3 grid-rows-5  w-[90%] mx-auto rows_10  bg-secondary rounded-lg shadow-lg py-[4rem] px-[1rem] mt-4 lg:mt-[3rem]">
                    <h1 className='col-span-3 row-span-1 lg:col-span-10 lg:row-span-1  primary_font_family lg:text-4xl md:text-4xl text-4xl text-blue-400 text-center text_for_423'>
                        Start your Journey
                    </h1>
                    <div className="lg:col-span-2  w-full flex items-center gap-2 p-1 border bg-gray-500 shadow width_423_span_1 rounded-md md:col-span-1 col-span-2 row-span-1 max-width-423">
                        <div className=" mx-auto">
                            <FontAwesomeIcon icon={faLocation} className=' text-white w-[2rem] lg:w-[1rem] xl:w-[1rem] h-auto' />
                        </div>
                        <input className=" p-4 w-[70%] mx-auto rounded-md padding_423px" placeholder="Location" />
                    </div>
                    <div className="lg:col-span-2  w-full flex items-center gap-2 p-1 border bg-gray-500 shadow width_423_span_1 rounded-md md:col-span-1 col-span-2 row-span-1 max-width-423">
                        <div className="mx-auto ">
                            <FontAwesomeIcon icon={faTruck} className=' text-white w-[2rem] lg:w-[1rem] xl:w-[1rem] h-auto' />
                        </div>
                        <input className=" p-4 w-[70%] mx-auto rounded-md padding_423px" placeholder="Vehicle" />
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
                    <button className="lg:col-span-3 width_423_span_1 search_423px max-width-423 col-span-3 row-span-1  lg:px-[1rem] lg:h-[50%] my-auto bg-blue-400 hover:bg-blue-600 lg:w-full md:w-[90%] mx-auto flex justify-center items-center shadow-lg lg:gap-1 gap-4 rounded-md py-4  px-4">
                        <span className='lg:text-[1rem] text-[2rem]  text-white font-bold lg:p-[1rem]'>Search</span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white  lg:w-4  w-8 h-auto' />
                    </button>

                </div>
            </section>
        </>
    );
}
