
import Layout from "@/components/Layout";
import Home from "@/components/Home/Home";
import Categories from "@/components/Home/Categories";
import Offers from "@/components/Home/body/offers";
import Trending from "@/components/Home/body/trending";
import Top_Picks from "@/components/Home/body/top";
export default function Index() {
  return (
    <Layout>
      <Home />
      <Categories />
      <section id="body" className="grid lg:grid-cols-4 lg:grid-rows-3 my-4 w-[90%] mx-auto gap-8 md:grid-cols-5 md:grid-rows-3 sm:gird-cols-3 sm:grid-rows-3">
        <div className="  lg:col-span-1 lg:row-span-3 p-4 md:col-span-2 md:row-span-3 sm:col-span-3 sm:row-span-1">
          <Offers deadline={24 * 60 * 60 * 3 * 1000} />
        </div>
        <div className=" lg:col-span-3 lg:row-span-2 p-4 md:cols-span-3 md:row-span-2 sm:col-span-3 sm:row-span-1" >
          <Trending />
        </div>
        <div className="bg-blue-800 lg:col-span-3 lg:row-span-1 md:col-span-3 md:row-span-1 sm:col-span-3 sm:row-span-1 p-4">
          <Top_Picks />
        </div>
      </section>
    </Layout>
  )
}
