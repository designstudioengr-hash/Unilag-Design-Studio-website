import { useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import unilagGate from '../../assets/school.jpeg'

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
  const imageRef = useRef<HTMLImageElement>(null)
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [src])

  return <img ref={imageRef} src={imageSrc} alt={alt} />
}

const Home = () => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate('/explore')
  }

  return (
    <div id="home" className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Empowering Innovation<br />at UNILAG Design Studio</h1>
          <p>
            A creative hub powered by UNILAG and RICE360, equipping students with hands-on experience in engineering, healthcare innovation, and cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button type='button' title='explore' className="primary-btn" onClick={handleExploreClick}>Explore Projects</button>
          </div>
        </div>
        <div className="hero-image">
          <LazyImage src={unilagGate} alt="UNILAG Gate" />
        </div>
      </section>
      <section className="about-section">
        <div className='about-text'>
          <p>
            <span className="about-bold">UNILAG Design Studio </span> 
            is a pioneering collaboration between the University of Lagos and the 
           <span className="about-highlight"> Rice360 Institute for Global Health Technologies at Rice University, Houston.</span> 
           The studio is a creative innovation hub that equips students, faculty, and professionals with hands‑on experience in engineering, healthcare innovation, and cutting‑edge technology.
            <span className="about-highlight"> It provides a collaborative environment where diverse talents converge to design, prototype, and launch solutions that address real‑world challenges.</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
