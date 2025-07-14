import './App.css'
import DefaultPage from './components/DefaultPage/';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import About from './pages/About'
import Home from './pages/Home'
import Post from './pages/Post';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='post/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
