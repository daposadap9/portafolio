import React from 'react'

const Cards = ({url, title, text, children}) => {
    return (
          <div className='grid max-w-[220px] relative px-2 py-2 h-[550px] bg-morado rounded-md border-2 border-white'>
            <img 
            src={url}
            className="h-[220px] object-cover w-full rounded-md"
            />
            <div className='relative p-1'>
              <h1 className='font-semibold m-0 text-white text-xl'>{title}</h1>
            </div>
            <div className='flex flex-col relative justify-center overflow-y-scroll px-2 h-[200px] z-10'>
                <h3 className='absolute h-[200px] top-2 bg-morado'>{text}</h3>
            </div>
            <div className='flex justify-around relative'>
                {children}                
            </div>
            </div>
  )
}

export default Cards