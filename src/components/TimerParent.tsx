import { useState } from 'react';
import { Timer } from './Timer';

export const TimerParent = () => {

    const [milliseconds, setMilliseconds] = useState(1000)

  return (
    <div className="mt-1">
        <span>Millisceonds { milliseconds }</span>
        <br />
        <button className='btn btn-outline-success' onClick={() => setMilliseconds(1000)}>1000</button>
        <button className='btn btn-outline-success' onClick={() => setMilliseconds(2000)}>2000</button>
        <button className='btn btn-outline-success' onClick={() => setMilliseconds(3000)}>3000</button>
        <Timer milliseconds= {milliseconds}/>
    </div>
  )
}
