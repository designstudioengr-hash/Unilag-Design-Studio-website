import './explore.css'
import { useState, useEffect, useRef } from 'react'
import trashley from '../../assets/project/trashley.png'
import biliwrapper from '../../assets/project/biliwrapper.jpeg'
import attendance from '../../assets/project/attendancepro.png'
import smokedetector from '../../assets/project/smokedetector.jpeg'
import neoblankey from '../../assets/project/neoblankey.jpeg'

const projects = [
	{
    img: trashley,
		title: 'Trashley - The Automated Wastebin',
		desc: 'Trashley is a smart, touchless dustbin that detects users, opens automatically, and ensures hygienic waste disposal. With voice control, a mobile app, and fill-level sensors, it prevents overflow and offers convenience from anywhere.',
	},
	{
    img: biliwrapper,
		title: 'Smart Biliwrapper',
		desc: 'The Smart Biliwrapper is an intelligent phototherapy blanket that treats neonatal jaundice using LED light and built-in temperature sensors to ensure safe, effective care. Designed for comfort, portability, and affordability, it offers real-time alerts and an intuitive interface for caregivers, making phototherapy more accessible in low-resource settings.',
	},
	{
    img: attendance,
		title: 'The Attendance Pro - RFID-Based Attendance System',
		desc: 'The Attendance Pro is an RFID-based system that automates attendance tracking by recording scans directly into Google Sheets. Powered by an ESP32 microcontroller, it delivers fast, accurate, and secure records while eliminating manual errors and fraud.',
	},
  {
    img: smokedetector,
    title: 'Smart Smoke Detector with Integrated Ventilation System ',
    desc: 'The Smart Smoke Detector with Integrated Ventilation System goes beyond alerts by actively reducing smoke during fires. Using Arduino-based sensors and motors, it detects smoke and heat, automatically opens windows and doors, and activates a fan for extraction—offering real protection, not just warnings.',
  },
  {
    img: neoblankey,
    title: 'NeoBlankey - Neonatal Heating Swaddle Blanket',
    desc: 'NeoBlankey is an affordable, portable neonatal heating system that prevents hypothermia in newborns. Combining an insulated swaddle, heating compartment, and Arduino-powered control, it maintains safe temperatures between 27°C and 40°C—offering a low-cost alternative to incubators for rural and low-resource healthcare settings.',
  },
]

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
const Explore = () => {
  return (
    <div className="explore-container">
      <h1 className="explore-title">Our Vision</h1>
      <div className="cards-container">
        <div className="card goal-card">
          <h2 className="card-title">Goal</h2>
          <p className="card-content">
            To provide easy access to state-of-the-art specialized 
            equipment and relevant resources that promote innovation, 
            and to offer a conducive environment for young talents to 
            develop indigenous solutions using locally sourced materials.
          </p>
        </div>

        <div className="card mission-card">
          <h2 className="card-title">Mission</h2>
          <p className="card-content">
            To nurture a culture of innovation and creativity among 
            students by providing them with the necessary tools, 
            resources, and mentorship to develop practical solutions 
            that address real-world challenges.
          </p>
        </div>
      </div>

      <div>
  <h1 className="explore-title">Projects</h1>
  <div className="projects-container">
    {projects.map((project, index) => (
      <div
        className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}
        key={index}
      >
        <div className="project-text">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-content">{project.desc}</p>
        </div>
        <div className="project-image">
          <LazyImage src={project.img} alt={project.title} />
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Explore
