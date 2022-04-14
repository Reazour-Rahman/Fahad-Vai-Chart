import React from 'react';
import './Content.css'
import img1 from '../../Assets/Vector.png';
import Charts from '../Chart/Charts';

const LeftContent = () => {
    return (
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div st  className="bg-red-500 text-center flex flex-col justify-between rounded-2xl">
                <div className="card mb-7 ">
                <h3 className='mb-12'>Send Money Bank</h3>
                <img src={img1} className='' style={{margin : '0 auto'}} alt="" />
                </div>
                <div className='bg-yellow-500 rounded-b-2xl'>
                <h3 style={{ }}  className='py-2.5 '>Request Money Transfer</h3>
                </div>
            </div>
            <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo tempore nihil magni sint deserunt iure impedit ut mollitia ipsam dicta, delectus facere incidunt ducimus tempora nam, sunt corrupti. Asperiores?</p>
            </div>
            <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo tempore nihil magni sint deserunt iure impedit ut mollitia ipsam dicta, delectus facere incidunt ducimus tempora nam, sunt corrupti. Asperiores?</p>
            </div>
            
            </div>

            <div className="mt-4">
            <Charts/>
            </div>
        </div>
    );
};

export default LeftContent;