import React from 'react';

const ResolvedTask = ({ task }) => {
    return (
        <div className='px-4 py-5 bg-[#E0E7FF] shadow-sm my-2 rounded-lg text-lg font-medium'>
            {task.title}
        </div>
    );
};

export default ResolvedTask;