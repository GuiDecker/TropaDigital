import { BrowserRouter, Routes, Route} from "react-router-dom"

import Painel from "./Components/Painel"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Painel />}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
