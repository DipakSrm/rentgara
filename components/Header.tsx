import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from '@/public/logo.png';
import { useEffect, useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Add event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed z-[100] bg-white top-0 transition-all ease-in-out duration-300 ${isScrolled ? 'left-0 w-full' : 'left-[5%] w-[90%]'}`}>
            <div className={`flex      max-h-[15vh] p-4 font-base mx-auto overflow-hidden items-center justify-between secondary_font_family  ${!show ? "custom_underline" : ""}`}>
                <div className="grid items-center gap-2 grid-cols-5 ">
                    <div className="lg:col-span-1 md:col-span-1 col-span-3 ">
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
                        <Link href="/explore" className="p-4 hover:text-gray-500">Explore</Link>
                        <Link href="#" className="p-4 text-yellow-500 font-bold hover:text-yellow-700">SignUp as Owner</Link>
                        <Link href="#" className="p-4 hover:text-gray-500">ContactUs</Link>
                        <Link href="#" className="p-4 hover:text-gray-500">Profile</Link>
                    </div>
                    {/**For small devices */}
                    <div className={`absolute translate-y-[60%] flex bg-white z-10 w-[100vw] h-[40vh] pl-[3rem] flex-col gap-1 lg:hidden md:hidden transition-transform duration-900 ease-in-out  ${show ? "translate-x-[-10%] " : "translate-x-[-150%] "}`}>
                        <Link href="explore" className="hover:text-gray-500 ">Explore</Link>
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
        </div>
    );
}
