import React from 'react'

function ContentHeading({tittle, pera}) {
  return (
    <>
     {
        tittle && (
            <h3 className='text-[15px] font-semibold text-white'>{tittle}</h3>
        )
     }

    {
        pera && (
             <p className='text-[13px] font-medium text-secondary2'>{pera}</p>
        )
    }
    
    </>
  )
}

export default ContentHeading