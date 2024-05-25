import React from 'react'

const App = () => {
  // parent flex with three children right next to ecah other
  return (
    <>
    <div style={{display:'flex'}}>

      <div style={{backgroundColor:'red'}}>
        HITHERE  
      </div>

      <div style={{backgroundColor:'green'}}>
        HITHERE
      </div>

      <div style={{backgroundColor:'pink'}}>
        HITHERE
      </div>

    </div>


    {/* parent with three childer right next to each other palced in end */}
    <div style={{display:'flex',justifyContent:'flex-end'}}>

        <div style={{backgroundColor:'red'}}>
          HITHERE  
        </div>

        <div style={{backgroundColor:'green'}}>
          HITHERE
        </div>

        <div style={{backgroundColor:'pink'}}>
          HITHERE
        </div>

    </div>

{/* same thing using tailwind */}
  <div className="flex">

    <div style={{backgroundColor:'red'}}>
      HITHERE  
    </div>

    <div style={{backgroundColor:'green'}}>
      HITHERE
    </div>

    <div style={{backgroundColor:'pink'}}>
      HITHERE
    </div>

  </div>

  {/* same thing using tailwind */}
  <div className="flex justify-center">

    <div className='bg-red-500'>
      HITHERE  
    </div>

    <div  className='bg-green-500'>
      HITHERE
    </div>

    <div  className='bg-yellow-500'>
      HITHERE
    </div>

  </div>
   
    </>
  )
}

export default App