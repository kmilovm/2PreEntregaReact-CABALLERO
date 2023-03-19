import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarorganicos from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbarorganicos />
      <Routes>
        <Route path="/" exact element={<div>Inicio</div>} />
        <Route path="/frutas" exact element={<div>Frutas</div>} />
        <Route path="/verduras" exact element={<div>Verduras</div>} />
        <Route path="/hortalizas" exact element={<div>Hortalizas</div>} />
        <Route path="/otros" exact element={<div>Otros</div>} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
      <ItemListContainer greeting="Bienvenido a tu mercado virtual de Orgánicos del Retiro" />
    </BrowserRouter>
  );
}

export default App;

