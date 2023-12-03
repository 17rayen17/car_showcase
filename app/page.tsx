"use client"
import { useEffect, useState } from "react";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";



export default  function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2023);

  //pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async ()=>{
    setLoading(true)
    try{
      const res= await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2023,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      });
      setAllCars(res)
    }
    catch(err){
      console.error(err)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getCars();
  }, [manufacturer, model, fuel, year, limit])

  // console.log(allCars);
  // const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-4 padding-x padding-y max-width">
        <div className="home__text-container discoverScroll">
          <h1 className="text-4xl font-extrabold whitespace-nowrap">
            Car Catalogue
          </h1>
          <p>Explore out cars you might like</p>
        </div>
        {/* bar search and filter years fuel */}
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {/* end bar search and filter years fuel */}

        {/* DATA */}
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car)=>(
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div>
                <Image
                  src="/carshowlogo.svg"
                  alt="load"
                  width={50}
                  height={50}
                  className="object-contain mt-2 m-auto" 
                />
              </div>
            )}
            <ShowMore
              pageNumber = {limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ):(
          <div className="home__error-container">
            <p>Opps, no result . . .</p>
            <p className="text-black text-xl font-bold">{allCars?.message}</p>
            </div>
        )}
      </div>
    </main>
  );
}
