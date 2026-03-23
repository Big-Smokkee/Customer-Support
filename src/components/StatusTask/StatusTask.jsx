import React from 'react';

const StatusTask = ({ task }) => {
    return (
        <div className='border border-gray-200 p-1 rounded-xl my-2 shadow-lg'>
            <h3 className='text-lg font-medium'>{task.title}</h3>
            <button className="btn btn-active btn-success text-white font-semibold w-full">Success</button>
        </div>
    );
};

export default StatusTask;