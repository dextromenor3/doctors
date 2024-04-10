"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function DoctorSuggestions() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  };

  return (
    <div className=" flex flex-col ml-3 mt-5 border-[1px] rounded-lg p-4 h-[450px] overflow-y-auto overflow-x-hidden">
      <h2 className=" font-bold mb-5 text-center">Suggestions</h2>
      {doctorList.length > 0
        ? doctorList.map((item, index) => (
            <Link href={"/details/" + item?.id}>
              <div
                key={index}
                className=" flex flex-row items-center gap-2 border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out "
              >
                <Image
                  src={item.attributes?.image?.data?.attributes?.url}
                  alt="doctor"
                  height={500}
                  width={500}
                  className=" h-[90px] w-[70px] object-cover rounded-lg"
                />
                <div className=" mt-3 flex items-baseline flex-col gap-1">
                  <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                    {item.attributes?.categories.data[0].attributes?.Name}
                  </h2>
                  <h2 className=" font-bold">{item.attributes?.Name}</h2>
                  <h2 className=" text-primary text-sm">
                    {item.attributes?.Year_of_Experience} years of experience
                  </h2>
                </div>
              </div>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className=" h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"></div>
          ))}
    </div>
  );
}

export default DoctorSuggestions;
