import React from 'react'
import { MdSearchOff } from 'react-icons/md'

function NoDataFounded() {
  return (
    <div className='col-span-2'>
        <div className="flex flex-col space-y-7 justify-center items-center w-full h-full ">

        
        <div className=" text-9xl text-mainColor">
        <MdSearchOff/>
        </div>
        <p className='text-xl font-sans text-gray-900 capitalize font-medium'>
            No Data Found pleace search again
        </p>
        
        </div>
    </div>
  )
}

export default NoDataFounded