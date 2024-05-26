import React from 'react'

const App = () => {
  return (
    <>
      {/* grids of equal width */}

      <div className='grid grid-cols-3'>

        <div className='bg-red-500'>
          HITHERE
        </div>

        <div className='bg-yellow-500'>
          HITHERE
        </div>

        <div className='bg-green-500'>
          HITHERE
        </div>

      </div>

      {/* grids of unequal width */}

      <div className='grid grid-cols-12'>

        <div className='bg-red-500 col-span-5'>
          HITHERE
        </div>

        <div className='bg-yellow-500 col-span-2'>
          HITHERE
        </div>

        <div className='bg-green-500 col-span-5'>
          HITHERE
        </div>

      </div>


    </>
  )
}

export default App