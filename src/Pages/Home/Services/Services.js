import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whiting from '../../../assets/images/whitening.png'
import Service from '../Service';


const Services = () => {
    const services = [
        {
            _id:1 , 
            name:'Fluoride Treatment',
            description:'Is Teeth Whitening Safe For My Enamel? The yellow discoloration of your teeth is the most common sign of damaged enamel',
            img:fluoride
        },
        {
            _id:2 , 
            name:'Cavity Filling',
            description:'Is Teeth Whitening Safe For My Enamel? The yellow discoloration of your teeth is the most common sign of damaged enamel',
            img:cavity
        },
        {
            _id:3, 
            name:'Teeth Whiting',
            description:'Is Teeth Whitening Safe For My Enamel? The yellow discoloration of your teeth is the most common sign of damaged enamel',
            img:whiting
        },
    ]
    return (
        <div className="my-28">
                <div className='text-center  '>
                    <h2 className='text-primary text-1xl uppercase font-bold'>Our Service</h2>
                    <h2 className=' text-3xl '>Service we provide</h2>
                </div>
                <div className='grid grid-cols-1  lg:grid-cols-3 gap-5 mt-10 mb-10'>
                        {
                            services.map(service =><Service key={service._id} service={service}>
                            </Service>)
                        }
                </div>
                
        </div>
    );
};

export default Services;