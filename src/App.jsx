import React from 'react'

const App = () => {
  return (
    <>
    {/*  above md breakpoint it becomes blue below it it is red */}
    {/* PS ==
     three equal childer first 
     if i go below md it will go one below the other 
    */}



    {/* <div className='bg-red-500 md:bg-blue-500'>
      hii there

    </div> */}

    <div className='grid grid-cols-1 md:grid-cols-3'>

      <div className='bg-red-500'>hi there 1</div>
      <div className='bg-yellow-500'>hi there 2</div>
      <div className='bg-green-500'>hi there 3</div>

    </div>




    </>
  )
}

export default App