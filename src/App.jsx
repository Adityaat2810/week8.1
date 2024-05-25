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
   
    </>
  )
}

export default App