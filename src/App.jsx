import { BrowserRouter, Route, Routes } from "react-router-dom"
import './app.scss'
import Archives from './pages/Archives'
import Done from './pages/Done'
import Home from './pages/Home'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Archives' element={<Archives />} />
        <Route path='/Done' element={<Done />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App