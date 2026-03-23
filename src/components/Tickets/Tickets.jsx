import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ ticketsPromise, handleProgressTaskNumber, status, handleStatus }) => {
    const tickets = use(ticketsPromise)
    return (
        <div>
            <h3 className="text-[#34485A] text-2xl font-semibold mb-4">Customer Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tickets.map(ticket => (
                    <Ticket key={ticket.id} ticket={ticket} handleProgressTaskNumber={handleProgressTaskNumber} status={status[ticket.id] || ticket.status} handleStatus={handleStatus}></Ticket>
                ))}
            </div>
        </div>
    );
};

export default Tickets;