// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'


function App() {
  const  [color, setColor ]=useState("olive")



  return (
  
     <div className= ' w-full h-screen  duration-200 '
      style= {{backgroundColor: color}}
      
     >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"red"}}
          >Red
          </button>

          <button 
          onClick={()=>setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full  shadow-lg '
          style={{background:"Yellow"}}
          >Yellow
          </button>

          <button 
          onClick={()=>setColor("Green")}
          className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'
          style={{background:"Green"}}
          >Green
          </button>

          <button 
          onClick={()=>setColor("Black")}
          className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'
          style={{background:"Black"}}
          >Black
          </button>

          <button 
          onClick={()=>setColor("Blue")}
          className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'
          style={{background:"Blue"}}
          >Blue
          </button>

          <button 
          onClick={()=>setColor("Orange")}
          className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'
          style={{background:"Orange"}}
          >Orange
          </button>

          <button 
          onClick={()=>setColor("Purple")}
          className='outline-none px-4 py-1 rounded-full shadow-lg '
          style={{background:"Purple"}}
          >Purple
          </button>

        </div>
         </div>
     </div> 
    
  )
}

export default App