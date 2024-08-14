import React from 'react';
import Card from '../Card/Card';

const LeftSide = () => {
    return (
        <div>
            <div className='bg-blue-300 w-[400px] rounded-2xl'>
            <Card></Card>
            </div>
            <div className='bg-gray-100 w-[400px] rounded-2xl'>
            <Card></Card>
            </div>
            <div className='bg-gray-100 w-[400px] rounded-2xl'>
            <Card></Card>
            </div>
            <div className='bg-gray-100 w-[400px] rounded-2xl'>
            <Card></Card>
            </div>
           
        </div>
    );
};

export default LeftSide;