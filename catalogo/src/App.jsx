// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarcasProduto from './pages/MarcasProduto';
import DetalhesProduto from './pages/DetalhesProdutos.jsx';
import CategoryList from './components/Marcas/CategoryList.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marcas" element={<MarcasProduto />} />
      <Route path="/detalhesProduto" element={<DetalhesProduto />} />
      <Route path="/categoria" element={<CategoryList />} />
    </Routes>
  );
}

export default App;
