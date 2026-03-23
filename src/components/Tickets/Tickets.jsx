import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ ticketsPromise, handleProgressTaskNumber, status, handleStatus, resolveTaskNumber }) => {
    const tickets = use(ticketsPromise);

    const availableTickets = tickets.filter(ticket => {
        const resolved = resolveTaskNumber.find(resolvedTicket => resolvedTicket.id === ticket.id);
        return !resolved;
    });

    return (
        <div>
            <h3 className="text-[#34485A] text-2xl font-semibold mb-4">Customer Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableTickets.map(ticket =>
                    <Ticket key={ticket.id} ticket={ticket} handleProgressTaskNumber={handleProgressTaskNumber} status={status[ticket.id] || ticket.status} handleStatus={handleStatus}></Ticket>
                )}
            </div>
        </div>
    );
};

export default Tickets;