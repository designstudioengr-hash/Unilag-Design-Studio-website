import './home.css'
import unilagGate from '../../assets/school.png'

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Empowering Innovation<br />at UNILAG Design Studio</h1>
          <p>
            A creative hub powered by UNILAG and RICE360, equipping students with hands-on experience in engineering, healthcare innovation, and cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button type='button' title='explore' className="primary-btn">Explore Programs</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={unilagGate} alt="UNILAG Gate" />
        </div>
      </section>
      <section className="about-section">
        <p>
          <span className="about-bold">UNILAG Design Studio</span> 
            is a pioneering collaboration between the University of Lagos and the 
           <span className="about-highlight">RICE360 Global Institute at Rice University, Houston.</span> 
           The studio serves as a vibrant innovation hub where students, faculty, and professionals converge to tackle real-world challenges through
            <span className="about-highlight"> design, engineering, and technology.</span>
        </p>
        {/* <button type='button' title='learn more' className="learn-more-btn">Learn More</button> */}
      </section>
    </div>
  )
}

export default Home