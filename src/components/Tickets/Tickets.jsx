import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise)
    return (
        <div>
            <h3 className="text-[#34485A] text-2xl font-semibold mb-4">Customer Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tickets.map(ticket => (
                    <Ticket key={ticket.id} ticket={ticket}></Ticket>
                ))}
            </div>
        </div>
    );
};

export default Tickets;