import { useState } from 'react'
import { Signup } from "./pages/Signup"
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>

<BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </BrowserRouter>
      </div>
    
  )
}

export default App
