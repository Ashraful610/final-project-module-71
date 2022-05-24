import React from 'react';

const Review = ({review}) => {
    return (
         <div className="card bg-white shadow-xl">
            <div className="card-body">
                <p> {review.reviews}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt={review.img} />
                        </div>
                   </div>
                   <div className='font-bold'>
                            <h2>{review.name}</h2>
                            <h2>{review.location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;