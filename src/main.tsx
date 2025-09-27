import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './components/footer/footer.tsx'
import Header from './components/header/header.tsx'
import Home from './pages/home/home.tsx'

const About = lazy(() => import('./pages/about/about.tsx'))
const Services = lazy(() => import('./pages/servives/services.tsx'))
const Contact = lazy(() => import('./pages/contact/contact.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Services />
      <Contact />
    </Suspense>
    <Footer/>
  </StrictMode>,
)
