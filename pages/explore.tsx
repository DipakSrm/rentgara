
import Layout from "@/components/Layout";
import Cards from "@/components/explore/cards";
import Filter from "@/components/explore/filter";
import Upper from "@/components/explore/upper";

export default function Explore() {
    return (

        <>
            <Layout> <section id="section" className="w-[90%]   mx-auto  h-full grid lg:grid-rows-6 lg:grid-cols-6 mt-[10%] gap-4" >
                <div className=" lg:col-span-6 lg:row-span-2 lg:mt-[1.5rem] md:mt-[2.5rem] mt-[5rem] base:mt-[6rem]">
                    <Upper />
                </div>
                <div className="bg-green-400 lg:col-span-2 lg:row-span-2 ">
                    <Filter />
                </div>
                <div className="bg-orange-300 lg:col-span-4 lg:row-span-4">
                    <Cards />
                </div>
            </section></Layout>




        </>

    )
}