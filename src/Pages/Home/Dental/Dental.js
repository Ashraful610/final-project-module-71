import React from 'react';
import './Dental.css'
import threatment from '../../../assets/images/treatment.png'

const Dental = () => {
    return (
        <div className='dental-card grid grid-cols-1  lg:grid-cols-2 gap-5 mt-10 mb-10'>
            <div>
                <img className="threatment" src={threatment}></img>
            </div>
            <div className="dental-info">
                <h2 className="text-4xl font-bold">Exceptional Dental Care,on Your Terms</h2>
                <p className="text-xl mt-4">What is basic dental care? Basic dental care involves brushing and flossing your teeth regularly, seeing your dentist and/or dental hygienist for regular checkups and cleanings, and eating a mouth-healthy diet, which means eating plenty of whole grain foods, vegetables and fruits, and protein foods.</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary button">Get Started</button>
            </div>
        </div>
    );
};

export default Dental;