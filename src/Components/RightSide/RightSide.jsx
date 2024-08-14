import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import Remainder from '../Remainder/Remainder';

const RightSide = () => {
    return (
        <div>
            <div className='flex mt-5 ml-6 gap-2'>
            {/* card */}
            <div className='flex w-[250px] bg-gray-100 rounded-xl justify-around p-2' >
                <div>
                    <h3 className='text-3xl font-bold'>04</h3>
                    <h3 className='mt-5'>Completed</h3>
                    <h3>Course</h3>
                </div>
                <div>
                    <FaGraduationCap className='text-5xl text-blue-500' />
                    <p className='mt-4'>
                        20% Increase
                    </p>
                </div>
            </div>

            {/* card-2 */}
            <div className='flex w-[300px] bg-gray-100 rounded-xl justify-around p-4' >
                <div>
                    <h3 className='text-3xl font-bold'>12</h3>
                    <h3 className='mt-5'>Completed</h3>
                    <h3>Course  in Progress</h3>
                </div>
                <div>
                    <FaGraduationCap className='text-5xl text-blue-500' />
                    <p className='mt-4'>
                        20% Increase
                    </p>
                </div>
            </div>

        </div>
        <Remainder></Remainder>
        </div>
           

    );
};

export default RightSide;