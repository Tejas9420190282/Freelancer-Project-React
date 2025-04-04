import { useState } from 'react'
import Navbar from './component/Navbar'
import Company_Name from './component/Company_Name'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />     
        <Company_Name />
    </>
  )
}

export default App
