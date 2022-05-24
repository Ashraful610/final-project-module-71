import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1  from '../../assets/images/people1.png'
import people2  from '../../assets/images/people2.png'
import people3  from '../../assets/images/people3.png'
import Review from './Review';


const Testimonial = () => {
    const reviews = [
        {
            _id:1 , 
            name:'Winson Harry',
            reviews:'A great dentist understands that a patient needs to feel in control of his or her treatment.',
            location:'Dhaka',
            img:people1
        },
        {
            _id:2 , 
            name:'Winson Harry',
            reviews:'A great dentist understands that a patient needs to feel in control of his or her treatment.',
            location:'Dhaka',
            img:people2
        },
        {
            _id:3 , 
            name:'Winson Harry',
            reviews:'A great dentist understands that a patient needs to feel in control of his or her treatment.',
            location:'Dhaka',
            img:people3
        },
    ]
    return (
        <section className="p-4">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl text-primary">Testimonial</h2>
                    <h2 className="text-4xl ">What our patients say </h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt={quote}></img>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                 {
                     reviews.map((review) => <Review key={review._id} review={review}></Review>)
                 }
            </div>
        </section>
    );
};

export default Testimonial;