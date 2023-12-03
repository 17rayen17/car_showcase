"use client";
import { SearchManuFacturerProps } from "@/types"
import { Combobox, Transition } from '@headlessui/react';
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManuFacturer = ({selected, setSelected}:any) => {
  const [query, setQuery] = useState('');

  const filtredManufacturers = query === "" ? 
  manufacturers :
  manufacturers.filter((item)=>(
    item.toLowerCase().replace(/\s+/ig,"").includes(query.toLowerCase().replace(/\s+/ig,""))
  ));
  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className={`absolute top-[14px] `}>
            <Image 
            src={"/car-logo.svg"}
            width={20}
            height={20}
            alt="car Logo"
            className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
          placeholder="Volswagen"
          className="search-manufacturer__input"
          onChange={(e)=>setQuery(e.target.value)}
          displayValue={(manuFacturer:string)=>manuFacturer}
          />
          <Transition
          as={Fragment}
          leave="Transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={()=>setQuery('')}
          >
            <Combobox.Options>
              {filtredManufacturers.length === 0 &&
              query !== "" ? 
              (<Combobox.Option
              value={query}
              className="search-manufacturer__option text-red-500 font-bold"
              >
                "{query}" Doesn't exist
              </Combobox.Option>):(
                filtredManufacturers.map((item)=>(
                  <Combobox.Option
                  key={item}
                  value={item}
                  className={({active})=>`relative search-manufacturer__option 
                  ${active ? 'bg-primary-blue text-white':'text-gray-900 '}`}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )
              }

            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManuFacturer