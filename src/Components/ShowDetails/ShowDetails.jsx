import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const AllData= useLoaderData();
    const {id}=AllData;
    return (
        <div>
            <div>
                {/* <img src="" alt="" /> */}
            </div>
            <div>
                {/* total text */}
                <h1 className='text-4xl font-extrabold'>header</h1>
                <h2 className='text-2xl font-semibold'>By:</h2>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default ShowDetails;