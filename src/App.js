import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogPage from './Blog';
import Menu from './menu';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {['/home', '/'].map((path) => <Route path={path} element={<Home />} />) }
        <Route path='/blog' element={<BlogPage />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
