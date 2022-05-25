import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services , setServices] = useState([])
    const [treatment , setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-5'>
            <h2 className='text-secondary text-center text-2xl'>Available Appointment on {format(date , 'PP')}</h2>
             <div className=' grid grid-cols-1  lg:grid-cols-3 gap-5'>
                 {
                     services.map(service => <Service key={service._id} 
                        service={service}
                        setTreatment={setTreatment}>
                     </Service>)
                 }
             </div>
             {treatment && <BookingModal 
             treatment={treatment} 
             date={date}
             setTreatment={setTreatment}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;