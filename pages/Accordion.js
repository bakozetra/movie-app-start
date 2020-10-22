import React, { useState } from 'react'
export function According () {
  const [ isToggled , setIsToggle] = useState(false);
  const showme =  isToggled ? <h3>Show me</h3> : null

  return (
    <div>
       {showme}
      <button onClick= {() => setIsToggle(!isToggled)}> click me
      </button>
    </div>
  )
}