import {BrowserRouter, Route,Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}  />
        <Route path='/projects' Component={Projects}  />
        <Route path='/about' Component={About}  />
        <Route path='/contact' Component={Contact} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
