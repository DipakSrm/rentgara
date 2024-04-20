import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from '@/public/logo.png';
import { useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={`flex w-[90%] max-h-[15vh] p-4 font-base mx-auto overflow-hidden items-center justify-between secondary_font_family ${!show ? "custom_underline" : ""}`}>
                <div className="grid items-center gap-2 grid-cols-5 ">
                    <div className="lg:col-span-1 md:col-span-1 col-span-3 relative">
                        <Image
                            src={Logo}
                            width={200}
                            height={200}
                            alt="RentGara"
                            style={{ display: "inline" }}
                            priority={false}
                        />
                    </div>
                    <div className={`col-span-4 row-span-1 lg:block md:block hidden `}>
                        <Link href="#" className="p-4 hover:text-gray-500">Explore</Link>
                        <Link href="#" className="p-4 text-yellow-500 font-bold hover:text-yellow-700">SignUp as Owner</Link>
                        <Link href="#" className="p-4 hover:text-gray-500">ContactUs</Link>
                        <Link href="#" className="p-4 hover:text-gray-500">Profile</Link>
                    </div>

                    <div className={`absolute translate-y-[70%] p-4 flex    flex-col gap-1 lg:hidden md:hidden transition-all duration-300 ease-in-out  ${show ? "translate-x-0 " : "translate-x-[-100%] "}`}>
                        <Link href="#" className="hover:text-gray-500 ">Explore</Link>
                        <Link href="#" className="text-yellow-500 font-bold hover:text-yellow-700 ">SignUp as Owner</Link>
                        <Link href="#" className="hover:text-gray-500 ">ContactUs</Link>
                        <Link href="#" className="hover:text-gray-500 ">Profile</Link>

                    </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-3 items-center gap-2 ">
                    <Link href="#" className="col-span-1"><FontAwesomeIcon icon={faCartShopping} className="w-[1.5rem] p-4 hover:text-gray-500" /></Link>
                    <Link href="#" className="col-span-1"><FontAwesomeIcon icon={faUser} className="w-[1.5rem] p-4 hover:text-gray-500" /></Link>
                    <div className="lg:hidden md:hidden sm:block col-span-1"><FontAwesomeIcon className="w-[1.5rem] p-4" icon={show ? faXmark : faBars} onClick={() => setShow((prevState) => !prevState)} /></div>
                </div>
            </div>
        </>
    );
}
