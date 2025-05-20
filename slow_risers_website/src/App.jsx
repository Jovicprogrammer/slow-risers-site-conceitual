import './App.css';
import Layout from './Layout';
import Home from './pages/Home'
import RowenPommier from './pages/RowenPommier'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página padrão */}
          <Route path="rowen pommier" element={<RowenPommier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
