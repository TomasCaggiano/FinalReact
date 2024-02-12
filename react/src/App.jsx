import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
      <Route path="/categoria/:ItemId" element={<ItemDetailContainer />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
