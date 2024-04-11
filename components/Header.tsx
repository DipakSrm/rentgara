import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faPerson, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Logo from '@/public/logo.png'
export default function Header() {
    return (
        <>
            <div className="flex w-[90%] max-h-[15vh] p-4  font-base mx-auto custom_underline items-center justify-between secondary_font_family ">
                <div>
                    <Link href="#" >
                        <Image
                            src={Logo}
                            width={200}
                            height={200}
                            alt="RentGara"
                            style={{ display: "inline" }}
                            priority={false}

                        />
                    </Link>
                    <Link href="#" className="p-4 hover:text-gray-500">Rent</Link>
                    <Link href="#" className="p-4 hover:text-gray-500">Detail</Link>
                    <Link href="#" className="p-4 hover:text-gray-500">Listing</Link>
                    <Link href="#" className="p-4 hover:text-gray-500">Profile</Link>
                </div>
                <div>
                    <Link href="#">
                        <FontAwesomeIcon icon={faSearch} className="w-[1.5rem] p-4 hover:text-gray-500" />
                    </Link>
                    <Link href="#"><FontAwesomeIcon icon={faCartShopping} className="w-[1.5rem] p-4 hover:text-gray-500" /></Link>
                    <Link href="#"><FontAwesomeIcon icon={faUser} className="w-[1.5rem] p-4 hover:text-gray-500" /></Link>
                </div>
            </div>
        </>
    )
}