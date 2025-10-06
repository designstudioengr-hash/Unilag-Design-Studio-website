import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Footer from './components/footer/footer.tsx'
import Header from './components/header/header.tsx'
import Home from './pages/home/home.tsx'

const About = lazy(() => import('./pages/about/about.tsx'))
const Services = lazy(() => import('./pages/servives/services.tsx'))
const Contact = lazy(() => import('./pages/contact/contact.tsx'))
const Explore = lazy(() => import('./pages/explore/explore.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Home/>
              <About />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
