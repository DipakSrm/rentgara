import Image from "next/image";
import Logo from '@/public/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="flex justify-between p-4 items-center w-full h-auto mt-[100vh] flex-wrap bg-gray-500 ">
            <div className="flex items-center gap-4 flex-wrap text-white">

                <Image
                    src={Logo}
                    width={200}
                    height={200}
                    alt="RentGara"
                    style={{ display: "inline" }}
                    priority={false}

                />

                <div>
                    <FontAwesomeIcon className="w-5" icon={faFacebook} />
                    <Link href="#">Facebook</Link>
                </div>
                <div>
                    <FontAwesomeIcon className="w-5" icon={faInstagram} />
                    <Link href="#">Instagram</Link>
                </div>
            </div>
            <div className="text-lg p-4 text-white">
                <p>Copyright © 2024 RentGara. All rights reserved.</p>

            </div>
        </footer>
    )
}