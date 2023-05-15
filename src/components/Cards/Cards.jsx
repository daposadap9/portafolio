import React from 'react';
import "atropos/atropos.css";
import Atropos from 'atropos/react';

const Cards = ({url, title, text, children}) => {

    return (
          <Atropos>
          <div className='grid max-w-[220px] relative px-2 py-2 h-[550px] bg-morado rounded-md border-2 border-white overflow-hidden'>
            <img 
            src={url}
            className="h-[220px] object-cover w-full rounded-md"
            data-atropos-offset="-5"
            />
            <div className='relative p-1'>
              <h1 className='font-bold m-0 text-white text-xl'>{title}</h1>
            </div>
            <div className='flex flex-col relative justify-center overflow-y-auto px-2 h-[180px]'>
                <h3 className='absolute h-[200px] top-0 bg-morado'>{text}</h3>
            </div>
            
            <div className='flex justify-end gap-16 relative'>
                {children}                
            </div>
            </div>
            </Atropos>
  )
}

export default Cards