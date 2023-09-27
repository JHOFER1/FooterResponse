import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Nav } from './components/common/navbar/nav'
import { Footer } from './components/common/footer/Footer'
function App() {
  return (
    <>
      <Nav />
     <div className='relative h-[500px]'>
      <div className='absolute -z-20 w-full h-full'>
        <div className='flex w-full bg-slate-500 items-center h-full'>
        PAGINAS PUBLICAS O PRIVADAS
        </div>
      </div>
     </div>
      <Footer />
    </>
  )
}

export default App
