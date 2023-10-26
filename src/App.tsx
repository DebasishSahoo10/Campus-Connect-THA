import './App.css'
import { Accordions } from './Pre Comps/Accordions'
import { Card } from './Pre Comps/Card'
import { Hero } from './Pre Comps/Hero'
import { TopNav } from './Pre Comps/TopNav'

function App() {

  return (
    <>
      <TopNav/>
      <Hero />
      <div className='flex lg:flex-row flex-col gap-2 lg:gap-10'>
        <Accordions />
        <div className='flex flex-col lg:w[90%] w-[100%]'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
