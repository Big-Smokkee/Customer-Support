import React from 'react';

const Ticket = ({ ticket }) => {
    return (
        <div>
            <h3>Name: {ticket.title}</h3>
        </div>
    );
};

export default Ticket;