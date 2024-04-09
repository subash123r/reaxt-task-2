import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    


<div className='main_bg_div'>

<div className='sec_div'> 
 <div className='month'>
  <h4 className='h1_h1'>free</h4>
  <h1 className='month_h1'>$0/MONTH</h1>
  <hr />
 </div>
 <div className='tags'>
  \
    <h3>✔️ Single Users</h3>
    <h3>✔️ 50GP Storage</h3>
    <h3>✔️ Unlimited Public Project</h3>
    <h3>✔️ Community Access</h3>
    </div>
    <div className='tags_2'>
    <h3>✖️ Unlimited Private Project</h3>
    <h3>✖️ Dedicated Phone Support</h3>
    <h3>✖️ Free Subdomain</h3>
    <h3>✖️ Monthly Status Reports</h3>
    </div>
  <button className='btn'>BUTTON</button>
</div>





<div className='sec_div_2'> 
 <div className='month'>
  <h4 className='h1_h1'>plus</h4>
  <h1 className='month_h1'>$9/MONTH</h1>
  <hr />
 </div>
 <div className='tags'>
  \
    <h3>✔️ S Users</h3>
    <h3>✔️ 50GP Storage</h3>
    <h3>✔️ Unlimited Public Project</h3>
    <h3>✔️ Community Access</h3>
    
    <h3>✔️ Unlimited Private Project</h3>
    <h3>✔️ Dedicated Phone Support</h3>
    <h3>✔️ Free Subdomain</h3>
    </div>
    <div className='tags_2'>
    <h3>✖️ Monthly Status Reports</h3>
    </div>
  <button className='btn'>BUTTON</button>
</div>



<div className='sec_div_2'> 
 <div className='month'>
  <h4 className='h1_h1'>pro</h4>
  <h1 className='month_h1'>$49/MONTH</h1>
  <hr />
 </div>
 <div className='tags'>
  \
    <h3>✔️ Single Users</h3>
    <h3>✔️ 50GP Storage</h3>
    <h3>✔️ Unlimited Public Project</h3>
    <h3>✔️ Community Access</h3>
    <h3>✔️ Unlimited Private Project</h3>
    <h3>✔️ Dedicated Phone Support</h3>
    <h3>✔️ Free Subdomain</h3>
    <h3>✔️ Monthly Status Reports</h3>
    </div>
  <button className='btn'>BUTTON</button>
</div>
</div>
    </>
  )
}

export default App
