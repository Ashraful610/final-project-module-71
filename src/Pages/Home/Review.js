import React from 'react';

const Review = ({review}) => {
    return (
         <div class="card bg-white shadow-xl">
            <div class="card-body">
                <p> {review.reviews}</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
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