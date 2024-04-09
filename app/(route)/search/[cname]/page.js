"use client";
import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";

function Search({ params }) {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    console.log(params.cname);
    getDoctors();
  }, []);

  const categoryName = decodeURIComponent(params.cname)
  
  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((resp) => {
      console.log(resp);
      setDoctorList(resp.data.data);
    });
  };

  return <div className=" mt-5">
    <DoctorList doctorList={doctorList} heading={categoryName}/>
  </div>;
}

export default Search;
