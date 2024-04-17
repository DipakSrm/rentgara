
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
      <section id="body" className="grid grid-cols-3 grid-rows-3 my-4 w-[90%] mx-auto gap-8">
        <div className=" bg-cyan-300 col-span-1 row-span-3 p-4">
          <Offers />
        </div>
        <div className="bg-red-500 col-span-2 row-span-2 p-4" >
          <Trending />
        </div>
        <div className="bg-blue-800 col-span-2 row-span-1 p-4">
          <Top_Picks />
        </div>
      </section>
    </Layout>
  )
}
