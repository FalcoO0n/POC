import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components from './ComponentsDemo'
import { Toaster } from "@/components/ui/toaster"




function DemoApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-8 mt-10">
     <Components />
     <Toaster />
    </div>
  )
}

export default DemoApp
