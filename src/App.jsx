import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'
import StatusTasks from './components/StatusTasks/StatusTasks'
import ResolvedTasks from './components/ResolvedTasks/ResolvedTasks'
import { toast } from 'react-toastify';
const ticketsFunction = async () => {
  const res = await fetch('/tickets.json');
  const json = res.json();
  return json;
}
const ticketsPromise = ticketsFunction();


function App() {
  // hero state in-progress
  const [progressTaskNumber, setProgressTaskNumber] = useState([]);
  // ticket state progress or open
  const [status, setStatus] = useState({});
  // resolved task
  const [resolveTaskNumber, setResolveTaskNumber] = useState([]);

  const handleProgressTaskNumber = (ticket) => {
    const newTask = [...progressTaskNumber];
    newTask.push(ticket);
    setProgressTaskNumber(newTask);
    toast('Task is In-Progress');
  }
  const handleResolveTaskNumber = (ticket) => {
    console.log(ticket);
    const newTask = [...resolveTaskNumber];
    newTask.push(ticket);
    setResolveTaskNumber(newTask);
    toast('Task is Resolved');
    const anotherArray = progressTaskNumber.filter(task => ticket.id !== task.id);
    setProgressTaskNumber(anotherArray);
  }

  const handleStatus = (ticket) => {
    setStatus(prev => ({
      ...prev,
      [ticket.id]: "In-Progress"
    }));
  }
  return (
    <>
      <main data-theme="light" className='inter'>
        <Navbar></Navbar>
        <Hero progressTaskNumber={progressTaskNumber} resolveTaskNumber={resolveTaskNumber}></Hero>
        <div className="px-6 md:px-20 flex flex-col md:flex-row gap-6">
          {/* left side section */}
          <div className="w-full md:w-4/6">
            <Suspense fallback={<h4>loading</h4>}>
              <Tickets ticketsPromise={ticketsPromise} handleProgressTaskNumber={handleProgressTaskNumber} status={status} handleStatus={handleStatus} resolveTaskNumber={resolveTaskNumber}></Tickets>
            </Suspense>
          </div>
          {/* right side section */}
          <div className="w-full md:w-2/6 flex flex-col gap-6">
            <StatusTasks progressTaskNumber={progressTaskNumber} resolveTaskNumber={resolveTaskNumber} handleResolveTaskNumber={handleResolveTaskNumber}> </StatusTasks>
            <ResolvedTasks resolveTaskNumber={resolveTaskNumber}></ResolvedTasks>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
