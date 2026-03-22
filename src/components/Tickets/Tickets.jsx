import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise)
    return (
        <div>
            <h3 className='text-[#34485A] text-2xl font-semibold'>Customer Tickets</h3>
            <div>
                {
                    tickets.map(ticket => <Ticket ticket={ticket} ke={ticket.id}></Ticket>)
                }
            </div>
        </div>
    );
};

export default Tickets;