"use client";
import { useState, useEffect } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import Link from 'next/link';
import Image from 'next/image';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { usePathname } from "next/navigation";

function CategoryList() {

const params = usePathname();
const category = params.split('/')[2];

  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="h-screen mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Categories Search ..." />
        <CommandList className=' overflow-visible'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Categories" >
            {categoryList &&
              categoryList.map((item, index) => (
                <CommandItem key={index}>
                  <Link href={'/search/' + item.attributes?.Name}
                  className={`p-2 flex gap-2 text-[14px] text-blue-600 rounded-md cursor-pointer w-full items-center ${category == item.attributes.Name&&'bg-blue-100'}`}>
                    <Image
                      src={item.attributes?.Icon?.data.attributes?.url}
                      alt="icon"
                      width={22}
                      height={22}
                    />
                    <label>
                        {item.attributes?.Name}
                    </label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
