import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'
import StatusTask from './components/StatusTask/StatusTask'
import ResolvedTask from './components/ResolvedTask/ResolvedTask'
import { toast } from 'react-toastify';
const ticketsFunction = async () => {
  const res = await fetch('/tickets.json');
  const json = res.json();
  return json;
}
const ticketsPromise = ticketsFunction();


function App() {
  // hero state in-progress
  const [progressTaskNumber, setProgressTaskNumber] = useState(0);
  // ticket state progress or open
  const [status, setStatus] = useState({});
  const handleProgressTaskNumber = (ticket) => {
    console.log(ticket);
    setProgressTaskNumber(progressTaskNumber + 1);
    toast('Task is In-Progress');
  }
  const handleStatus = (ticket) => {
    console.log(ticket);
    setStatus(prev => ({
      ...prev,
      [ticket.id]: "In-Progress"
    }));
  }
  return (
    <>
      <main data-theme="light" className='inter'>
        <Navbar></Navbar>
        <Hero progressTaskNumber={progressTaskNumber}></Hero>
        <div className="px-6 md:px-20 flex flex-col md:flex-row gap-6">
          {/* Left side: tickets */}
          <div className="w-full md:w-4/5">
            <Suspense fallback={<h4>loading</h4>}>
              <Tickets ticketsPromise={ticketsPromise} handleProgressTaskNumber={handleProgressTaskNumber} status={status} handleStatus={handleStatus}></Tickets>
            </Suspense>
          </div>

          {/* Right side: status + resolved */}
          <div className="w-full md:w-1/5 flex flex-col gap-6">
            <StatusTask></StatusTask>
            <ResolvedTask></ResolvedTask>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
