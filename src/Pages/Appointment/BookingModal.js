import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({treatment ,date , setTreatment , refetch}) => {
  const {name ,_id, slots} = treatment;
  const [user, loading, error] = useAuthState(auth);

  const formattedDate = format(date , 'PP')

  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value
    const booking = {
      threatmentId:_id,
      threatment:name,
      slot,
      date: formattedDate ,
      patient:user.email, 
      patientName:user.displayName,
      phone: event.target.phone.value
    }

    fetch('https://shielded-scrubland-90862.herokuapp.com/booking',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.success){
        toast.success(`successfully you got a appointment ${formattedDate}`)
      }
      else{
        toast.error(`Already have a appointment ${data?.booking?.date} on ${data?.booking?.slot}`)      
      }
      setTreatment(null)
      refetch();
     
    })
  }
    return (
        <div>
              <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                   <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> 
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-4'>

                        <input type="text" value={format(date , 'PP')} disabled redOnly className="input input-bordered w-full max-w-xs" />

                       <select name="slot" className="select select-bordered w-full max-w-xs">
                           {
                            slots.map(( slot, index ) => <option key={index} value={slot}>{slot}</option>)
                          }
                        </select>

                        <input type="text" name='name' placeholder="Your name" disabled value={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled defaultValue={user?.email}
                         redOnly placeholder="Email address" className="input input-bordered w-full max-w-xs" />

                        <input type="number" name='phone' placeholder="phone number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
              </div>
            </div>
        </div>
    );
};

export default BookingModal;