
import { BrowserRouter ,Routes , Route } from "react-router-dom"
import Home from "./views/Home"
import Notfound from "./views/Notfound"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="*" element={<Notfound/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App