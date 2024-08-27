import React, { useState } from 'react'

const Button = () => {
    const [color , setColor] = useState("red")
    console.log(color);
    
  return (
    <div className='h-[100vh]' style={{backgroundColor : color}}>
        <div className=' absolute bottom-20 left-[460px] bg-white rounded-lg'>
            <button onClick={() => setColor("red")} className='bg-red-400 w-28 p-2 m-3 rounded-md'>Red</button>
            <button onClick={() => setColor("green")} className='bg-green-400 w-28 p-2 m-3 rounded-md'>Green</button>
            <button onClick={() => setColor("blue")} className='bg-blue-400 w-28 p-2 m-3 rounded-md'>Blue</button>
        </div>
    </div>
  )
}

export default Button