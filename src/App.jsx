import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'
import StatusTask from './components/StatusTask/StatusTask'
import ResolvedTask from './components/ResolvedTask/ResolvedTask'

const ticketsFunction = async () => {
  const res = await fetch('/tickets.json');
  const json = res.json();
  return json;
}
const ticketsPromise = ticketsFunction();


function App() {

  return (
    <>
      <main data-theme="light" className='inter'>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="px-6 md:px-20 flex flex-col md:flex-row gap-6">
          {/* Left side: tickets */}
          <div className="w-full md:w-4/5">
            <Suspense fallback={<h4>loading</h4>}>
              <Tickets ticketsPromise={ticketsPromise}></Tickets>
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
