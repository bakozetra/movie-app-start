import React , {useState} from 'react'

export function Counter () {
    //property and set property
  const [ count , setCount ] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button 
      // we use function if we use parameter
        onClick={() => setCount(count + 1)}
      >+</button>
    </div>
  )
}