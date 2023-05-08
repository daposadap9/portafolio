import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Cards = ({url, title, text}) => {
    return (
          <div className='grid max-w-[220px] relative px-2 py-2 h-[550px] bg-morado rounded-md'>
            <img 
            src={url}
            className="h-[250px] object-cover w-full rounded-md"
            />
            <div className='relative p-1'>
              <h1 className='font-semibold m-0 text-white'>{title}</h1>
            </div>
            <div className='flex flex-col relative justify-center overflow-hidden overflow-y-auto'>
                <h3 className='relative bg-morado'>{text}</h3>
            </div>
            <div className='flex justify-around relative p-2'>
                <a href=""><FontAwesomeIcon size='2x' icon={faGithub}/></a>
                <a href=""><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
            </div>
            </div>
  )
}

export default Cards