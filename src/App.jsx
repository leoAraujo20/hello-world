import './App.css'
import DefaultPage from './components/DefaultPage/';
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
