import React from 'react';

const Card = () => {
    return (
        <div className='flex   w-[400px] p-2 rounded-2xl mt-5'>
            <div className='mt-2'>
                <h2 className='text-xl'>Fundationals of user Experience</h2>
                <h2 className='text-xl'>(UX) Design</h2>
                <div className='flex  gap-2 mt-2'>
                    <p>4 Assignment</p>
                    <p> 20 Vedios</p>
                </div>
                <div className='mt-4'> 
                    <button className='btn bg-white rounded-full w-[200px]'>
                        Countinue Course
                    </button>
                </div>
            </div>
            <div className='mt-12 -ml-12 '>
                <div
                    className="radial-progress  text-blue-950 border-gray-300 border-4"
                    style={{ "--value": 80 }}
                    role="progressbar">
                    80%
                </div>
            </div>
        </div>
    );
};

export default Card;