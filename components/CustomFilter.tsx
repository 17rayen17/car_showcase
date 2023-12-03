"use client"
import { CustomFilterProps } from "@/types"
import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { updateSearchParams } from "@/utils"



const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
const [selected, setSelected] = useState(options[0]);
return (
  <div className="w-fit">
    <Listbox
      value={selected}
      onChange={(e:any) => {
        setSelected(e)
        setFilter(e.value)
      }
      }
    >
      <div className="w-fit z-10 relative">
        <Listbox.Button className="custom-filter__btn">
          <span className="block truncate">{selected.title}</span>
          <Image
            src="/chevron-up-down.svg"
            alt="chevron"
            width={20}
            height={20}
            className="object-contain ml-4"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="custom-filter__options">
            {options.map((option)=>(
              <Listbox.Option
              value={option}
              key={option.title}
              className={({active})=>`relative cursor-default py-2 px-4 select-none ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
              >
                {({selected})=>(
                  <span className={`block truncate ${selected ? 'font-semibold':'font-normal'}`}>{option.title}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>

        </Transition>
      </div>
    </Listbox>
  </div>
)
}

export default CustomFilter