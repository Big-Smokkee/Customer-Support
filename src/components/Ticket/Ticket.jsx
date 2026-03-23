import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";

const Ticket = ({ ticket, handleProgressTaskNumber, status, handleStatus }) => {
    return (
        <section className="p-4 border border-gray-200 rounded-lg shadow-sm w-112.5 cursor-pointer  hover:bg-gray-200" onClick={() => {
            handleProgressTaskNumber(ticket)
            handleStatus(ticket)
        }}>
            {/* Top row: title + status badge */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h3 className="text-lg font-medium">{ticket.title}</h3>
                <h3
                    className={`flex items-center gap-2 px-3 py-1 rounded-2xl text-sm font-medium 
        ${status === 'Open'
                            ? 'bg-green-200 text-green-700'
                            : 'bg-yellow-200 text-yellow-700'}`}
                >
                    <FontAwesomeIcon icon={faCircle} /><span>{status === 'Open' ? 'Open' : 'In-Progress'}</span>

                </h3>
            </div>

            {/* Description */}
            <p className="text-[#627382] my-4">{ticket.description}</p>

            {/* Bottom row: id + priority + agent + date */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#627382] text-sm">
                {/* Left side */}
                <div className="flex flex-wrap items-center gap-4">
                    <p>#{ticket.id}</p>
                    <p
                        className={
                            ticket.priority === 'HIGH PRIORITY'
                                ? 'text-red-500 font-semibold'
                                : ticket.priority === 'MEDIUM PRIORITY'
                                    ? 'text-yellow-500 font-semibold'
                                    : 'text-green-500 font-semibold'
                        }
                    >
                        {ticket.priority}
                    </p>
                </div>

                {/* Right side */}
                <div className="flex flex-wrap items-center gap-4">
                    <p>{ticket.agent}</p>
                    <p className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        {ticket.date}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Ticket;