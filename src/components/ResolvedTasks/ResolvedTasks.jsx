import React from 'react';
import ResolvedTask from '../ResolvedTask/ResolvedTask';

const ResolvedTasks = ({ resolveTaskNumber }) => {
    return (
        <div className='border border-gray-200 shadow-xl p-3'>
            <h3 className='text-[#34485A] text-2xl font-semibold mb-4'>Resolved Task</h3>
            <p className='text-gray-500'>No resolved tasks yet.</p>
            {
                resolveTaskNumber.map(task => <ResolvedTask task={task}></ResolvedTask>)
            }
        </div>
    );
};

export default ResolvedTasks;