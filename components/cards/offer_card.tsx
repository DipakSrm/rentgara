import Image from "next/image"

interface Offer_Data_Props {
    id: number,
    Title: string,
    Sub_Title: string,
    Offer_Des: string,
    img_url: string
}
export default function Offer_Card({ id,
    Title,
    Sub_Title,
    Offer_Des,
    img_url }: Offer_Data_Props) {
    console.log(id, Title, Sub_Title, Offer_Des, img_url)
    return (
        <>
            <div className="bg-secondary p-4 flex flex-col gap-2 justify-center items-center">
                <h1 className="primary_font_family">{Title}</h1>
                <p className="secondary_font_family">{Sub_Title}</p>
                <div className="relative">
                    <Image src={img_url} alt="picture" height={100} width={100} />
                    <span className="badge absolute top-0 right-[-30%]">{Offer_Des}</span>
                </div>
                <div className="w-[80%] mx-auto outer-box px-4 py-2 text-center">
                    Rent Now
                </div>
            </div>
        </>
    )
}