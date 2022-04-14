import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import './Content.css'
const Content = () => {
    return (
        <div className='p-5'>
           <div className=" grid grid-cols-3 gap-10 ">
           
            <div className=" col-span-3 sm:col-span-2">
            <LeftContent></LeftContent>
            </div>
            <div className=" col-span-3 sm:col-span-1 ">
                <RightContent></RightContent>
            </div>
        </div>
    </div>
    );
};

export default Content;