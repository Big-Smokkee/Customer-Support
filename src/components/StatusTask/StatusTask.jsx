import React from 'react';

const StatusTask = ({ task, handleResolveTaskNumber }) => {
    return (
        <div className='border border-gray-200 p-4 rounded-xl my-2 shadow-lg space-y-2'>
            <h3 className='text-lg font-medium'>{task.title}</h3>
            <button className="btn btn-active btn-success text-white font-semibold w-full" onClick={() => { handleResolveTaskNumber(task) }}>Success</button>
        </div>
    );
};

export default StatusTask;