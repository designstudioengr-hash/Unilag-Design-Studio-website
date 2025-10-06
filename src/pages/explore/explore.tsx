import './explore.css'
import { useState, useEffect, useRef } from 'react'
import img1 from '../../assets/focus.png'
import img2 from '../../assets/mentor.png'
import img3 from '../../assets/collaborative.png'

const projects = [
	{
    img: img1,
		title: 'Project 1',
		desc: 'A detailed description of Project 1, including its objectives, methodologies, and outcomes.',
	},
	{
    img: img2,
		title: 'Project 2',
		desc: 'A detailed description of Project 2, including its objectives, methodologies, and outcomes.',
	},
	{
    img: img3,
		title: 'Project 3',
		desc: 'A detailed description of Project 3, including its objectives, methodologies, and outcomes.',
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
