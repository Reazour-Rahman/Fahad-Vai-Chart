import React from 'react';
import Content from '../../Components/Content/Content';
import SideBar from '../../Components/SideBar/SideBar';
import ToggleSideBar from '../../Components/SideBar/ToggleSideBar';


const Home = () => {
    return (
        <div>
            <ToggleSideBar></ToggleSideBar>
            <div className=" grid grid-cols-6 gap-0">
            <div className=" bg-red-200 hidden  sm:block">
                <SideBar></SideBar>
            </div>
            <div className=" col-span-6 sm:col-span-5 ">
                <Content></Content>
            </div>
            </div>
        </div>
    );
};

export default Home;