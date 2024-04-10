'use client';
import GlobalApi from '@/app/_utils/GlobalApi'
import { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestions from '../_components/DoctorSuggestions';

function Details({params}) {

  const [doctorById, setDoctorById] = useState();

  useEffect(() => {
    getDoctorById();
  },[])

  const getDoctorById=() => {
    GlobalApi.getDoctorById(params.recordId).then(resp => {
      setDoctorById(resp.data.data);
    })
  }


  return (
    <div className=' p-5 md:px-20'>
      <h2 className=' font-bold text-[22px]'>Details</h2>
      <div className='grid grid-cols-1 lg:grid-cols-5'>
        {/* Doctor Detail */}
        <div className='col-span-3'>
          {doctorById&&<DoctorDetail doctor={doctorById} /> }
        </div>
        
        {/* Doctor Suggestion */}
        <div className='col-span-2'>
          <DoctorSuggestions />
        </div>
      </div>
    </div>
  )
}

export default Details