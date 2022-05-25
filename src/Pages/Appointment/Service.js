import React from 'react';

const Service = ({service , setTreatment}) => {
    const {name , slots} = service
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body my-5">
            <h2 className="text-2xl text-center text-secondary">{name}</h2>
            <p className='text-center'>
                {
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day</span>
                }
            </p>
            <p className='text-center'>
               {slots.length} {slots.length > 1 ? 'spaces' :'space'} available
            </p>
            <div className="card-actions justify-center">
                <label 
                    for="booking-modal"
                    className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    disabled={slots.length === 0}
                    onClick={()=> setTreatment(service)}>
                     Book Appointment
                </label>
            </div>
        </div>
     </div>
    );
};

export default Service;