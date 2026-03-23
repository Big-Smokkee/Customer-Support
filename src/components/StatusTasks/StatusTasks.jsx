import React from 'react';
import StatusTask from '../StatusTask/StatusTask';
const StatusTasks = ({ progressTaskNumber, handleResolveTaskNumber }) => {
    return (
        <div className='border border-gray-200 shadow-xl p-3 w-full rounded-2xl'>
            <h3 className='text-[#34485A] text-2xl font-semibold mb-4'>Task Status</h3>
            {
                progressTaskNumber.length === 0 && <p className='text-gray-500'>Select a ticket to add to Task Status</p>
            }
            {
                progressTaskNumber.length !== 0 && <div>
                    {
                        progressTaskNumber.map(task => <StatusTask task={task} key={task.id} handleResolveTaskNumber={handleResolveTaskNumber}></StatusTask>)
                    }
                </div>
            }

        </div>
    );
};

export default StatusTasks;