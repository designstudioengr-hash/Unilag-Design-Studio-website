import { useState, useEffect, useRef } from 'react'
import './services.css'

import img1 from '../../assets/additive.png'
import img2 from '../../assets/ai.png'
import img3 from '../../assets/mechanical.png'
import img4 from '../../assets/handson.png'
import img5 from '../../assets/mentor.png'
import img6 from '../../assets/electronic.png'
import img7 from '../../assets/laser.png'
import img8 from '../../assets/final.jpg'
import img9 from '../../assets/IMG_1211.png'
import img10 from '../../assets/_MG_2464.png'
import img11 from '../../assets/_MG_2613.png'
import img12 from '../../assets/IMG_5360.png'
import img13 from '../../assets/IMG_7332.png'

const capabilities = [
  { img: img1, title: "Additive Manufacturing" },
  { img: img2, title: "AI and Machine Learning" },
  { img: img3, title: "Mechanical Fabrication" },
  { img: img4, title: "Design Prototyping, Testing & Validation" },
  { img: img5, title: "Project Consultation" },
  { img: img6, title: "Electronic Design" },
  { img: img7, title: "Laser Cutting" },
]

const workshops = [
  { img: img8},
  { img: img9},
  { img: img10},
  { img: img11},
  { img: img12},
  { img: img13},
]
const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === workshops.length - 1 ? 0 : prev + 1))
    }, 7000) 
    return () => clearInterval(slideInterval) 
  }, [workshops.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <div id='services' className="services-container" ref={containerRef}>
      <h1 className="services-title">Services Provided</h1>
      <p className="services-desc">
        At UNILAG Design Studio, we offer hands-on services that empower creators, students, and innovators to build, test, and launch real-world solutions.
      </p>
      <div className="capabilities-grid">
        {capabilities.map((cap, idx) => (
          <div className="capability-card" key={idx}>
            <img src={cap.img} alt={cap.title} />
            <h2>{cap.title}</h2>
          </div>
        ))}
      </div>
      <div className="services-quote">
        <span className="quote-icon left">"</span>
        <p>
          We foster creative exploration, practical skills, and innovative research for<br />
          students and professionals alike.
        </p>
        <span className="quote-icon right">"</span>
      </div>

      <section className="workshops-section">
        <div className="workshops-header">
          <h2>Studio Gallery</h2>
        </div>
        <div className="workshops-slideshow">
          <div className="slides-container">
            <div 
              className="slides-wrapper" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workshops.map((workshop, idx) => (
                <div className="slide" key={idx}>
                  <img src={workshop.img} alt={`Workshop ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-indicators">
          {workshops.map((_, idx) => (
            <button title='slide indicator'
              key={idx}
              className={`indicator ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}


export default Services