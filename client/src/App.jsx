import Table from "./components/table";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages";
import Insert from "./pages/insert";
import Edit from "./pages/edit";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </HashRouter>
  )
}

export default App
