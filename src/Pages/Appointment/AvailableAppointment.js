import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({date}) => {
    const [treatment, setTreatment] = useState(null);

    const  formattedDate = format(date , 'PP')

    const {data:services , isLoading , refetch } = useQuery(['available', formattedDate],()=>
        fetch(`https://shielded-scrubland-90862.herokuapp.com/available?date=${formattedDate}`)
       .then(res => res.json())
    )
 
    // console.log(  data)
    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div className='mt-5'>
            <h2 className='text-secondary text-center text-2xl'>Available Appointment on {format(date , 'PP')}</h2>
             <div className=' grid grid-cols-1  lg:grid-cols-3 gap-5'>
                 {
                     services?.map(service => <Service
                        key={service._id} 
                        service={service}
                        setTreatment={setTreatment}>
                     </Service>)
                 }
             </div>
             {treatment && <BookingModal 
                treatment={treatment} 
                date={date}
                setTreatment={setTreatment}>
                    refetch={refetch}
             </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;