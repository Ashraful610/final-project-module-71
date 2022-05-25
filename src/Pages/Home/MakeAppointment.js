import React from 'react';
import docter from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <div className="flex  items-center mt-[100px]"
         style={{
            background: `url(${appointment})`,
            marginBottom:'20px'
            }}>
            <div className="flex-1 hidden lg:block" >
                <img src={docter} className="mt-[-120px]" alt={docter}></img>
            </div>
            <div className="flex-1 p-6">
               <h2 className="text-primary text-xl">Appointment</h2>
                <h2 className="text-4xl text-white">Make an appointment Today</h2>
                <p className="text-white">The average time a dental appointment lasts is 30 to 45 minutes. You can expect a full exam of teeth, jaws, bite, gums, oral tissues to check the growth and development. A gentle cleaning might take place if needed, followed by polishing teeth and removing plaque, tartar and stains</p>
               <PrimaryButton >Get Start</PrimaryButton>
            </div>

        </div>
    );
};

export default MakeAppointment;