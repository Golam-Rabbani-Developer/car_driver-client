import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Registration from './Registration';

const UserTypes = () => {
    const [userTypes, setUserTypes] = useState('')

    return (
        <div>
            {
                userTypes ? "" :
                    <div className='flex justify-between items-center md:w-[75%] mx-auto min-h-screen'>
                        <p className='text-5xl flex justify-center items-center gap-8'><span>Go</span><span ><FaLongArrowAltRight /></span></p>
                        <div className='flex justify-center items-center flex-col gap-4'>

                            <button onClick={() => setUserTypes('Rider')} className="btn rounded-sm w-[300px] ">Are you a Rider</button>

                            <button onClick={() => setUserTypes('Learner')} className="btn bg-blue-600 border-none rounded-sm w-[300px]">Are you a Learner</button>

                            <button onClick={() => setUserTypes('Admin')} className="btn bg-red-600 rounded-sm w-[300px] border-none">Are you Admin</button>

                        </div>
                    </div>}

            {
                userTypes ? <div>
                    <Registration userTypes={userTypes} />
                </div> : ''
            }
        </div>
    );
};

export default UserTypes;