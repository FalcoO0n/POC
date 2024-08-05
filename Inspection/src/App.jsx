import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inspections from './pages/Inspections'

function App() {

  return (
    <div className='text-5xl font-bold text-center'>
        Inspection Module
      <Routes>
        <Route path='/inspections' element={<Inspections/>}/>
      </Routes>
    </div>
  )
}

export default App
