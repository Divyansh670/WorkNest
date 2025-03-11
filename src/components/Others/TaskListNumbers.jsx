import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen gap-5 justify-between mt-10'>
      <div className='w-[45%] bg-red-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-blue-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='w-[45%] bg-green-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] bg-purple-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
