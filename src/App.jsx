import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'

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
        <div className='px-6 md:px-20'>
          <Suspense fallback={<h4>loading</h4>
          }>
            <Tickets ticketsPromise={ticketsPromise}></Tickets>
          </Suspense>
        </div>
      </main>
    </>
  )
}

export default App
