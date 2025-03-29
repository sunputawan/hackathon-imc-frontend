import React from 'react'

const InputBox = () => {
  return (
    <div className='w-[90%] mx-auto rounded-4xl py-5 bg-custom-blue border my-5'>
        <div className='text-3xl text-white'>Enter your username</div>
        <input type="text" className="mt-4 w-[80%] bg-white rounded-3xl p-2 text-center text-4xl text-black focus:outline-none focus:ring-8 focus:ring-blue-900" />
    </div>
  )
}

export default InputBox