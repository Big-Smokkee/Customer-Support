import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <main data-theme="light" className='inter'>
        <Navbar></Navbar>
        <Hero></Hero>
      </main>
    </>
  )
}

export default App
