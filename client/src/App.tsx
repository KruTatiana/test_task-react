import { Routes, Route, Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ContactUsPage } from './components/ContactUsPage' 
import { NotFound } from './components/NotFound'
import './App.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact-us' element={<ContactUsPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
