import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
      <div className='h-full w-[300px] bg-pink-400 rounded-xl flex-shrink-0 p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>20 March 2025</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Make a React Project</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti neque illum sapiente alias earum! Magnam?</p>
      </div>

      <div className='h-full w-[300px] bg-orange-400 rounded-xl flex-shrink-0 p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>25 March 2025</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Do DSA problems</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti neque illum sapiente alias earum! Magnam?</p>
      </div>

      <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>10 April 2025</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Complete Assignment</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti neque illum sapiente alias earum! Magnam?</p>
      </div>

      <div className='h-full w-[300px] bg-yellow-300 rounded-xl flex-shrink-0 p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>18 May 2025</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Linkedin Post</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti neque illum sapiente alias earum! Magnam?</p>
      </div>

      <div className='h-full w-[300px] bg-pink-400 rounded-xl flex-shrink-0 p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>20 June 2025</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Make a Full Stack Project</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti neque illum sapiente alias earum! Magnam?</p>
      </div>
    </div>
  )
}

export default TaskList
