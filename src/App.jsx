import { useState } from 'react'


function App() {
  const [Color, setColor] = useState("olive")

  return (
      <div className='w-full h-screen flex justify-center' style={{backgroundColor:Color}}>
        <div className='text-white bg-blue fixed flex-wrap flex justify-center rounded-lg bottom-14'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"maroon"}} onClick={()=>setColor("maroon")}>Maroon</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button className='outline-none rounded-full px-4 py-1' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <div/>
          </div>
        </div>
      </div>

    
  )
}

export default App
