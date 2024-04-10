import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

function DoctorDetail({ doctor }) {

  const socialMediaList=[
    {
      id:1,
      icon:'/youtube.png',
    },
    {
      id:2,
      icon:'/linkedin.png',
    },
    {
      id:3,
      icon:'/twitter.png',
    },
    {
      id:4,
      icon:'/facebook.png',
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 mt-5 border-[1px] rounded-lg ">
      {/* Doctor Image */}
      <div className="cols-span-1 flex md:justify-center">
        <Image
          src={doctor.attributes?.image?.data?.attributes?.url}
          alt="doctor"
          height={200}
          width={200}
          className=" rounded-lg h-[250px] object-cover"
        />
      </div>
      {/* Doctor Info */}
      <div className=" col-span-2 mt-5 flex flex-col gap-3 items-baseline px-8">
        <h2 className="font-bold text-2xl">{doctor.attributes?.Name}</h2>
        <h2 className=" flex gap-2 flex-row text-gray-500 text-md">
          <GraduationCap />
          <span>
            {doctor.attributes?.Year_of_Experience} years of experience
          </span>
        </h2>
        <h2 className="flex gap-2 text-wrap">
          <MapPin />
          <span>{doctor.attributes?.Address}</span>
        </h2>
        <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
          {doctor.attributes?.categories.data[0].attributes?.Name}
        </h2>
        <div className=" flex flex-row">
          {socialMediaList.map((item, index) => (
            <Image key={index} src={item.icon} width={30} height={30} alt="icon" className=" m-1 border rounded-md p"/>
          ))}
        </div>
        <Button className=' mt-3 rounded-full border border-primary hover:bg-white hover:text-primary transition-all ease-in-out'>Book Appointment</Button>
      </div>
      {/* About Doctor */}
      <div className="mt-5 col-span-2 px-8">
        <h2 className="font-bold text-[20px] ">About me</h2>
        <p className=" text-gray-500 tracking-wide mt-5">{doctor.attributes?.About}</p>
      </div>
    </div>
  );
}

export default DoctorDetail;
