import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/global.css'

import Navbar   from './components/Navbar'
import Home     from './pages/Home'
import About    from './pages/About'
import Skills   from './pages/Skills'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/skills"   element={<Skills />}   />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />}  />
        {/* redirect to home */}
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
