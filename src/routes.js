import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu"
import  AboutMe  from "./pages/AboutMe"
import  Initial  from "./pages/Home"

function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Initial/>}/>
        <Route path="/sobremim" element={<AboutMe/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
