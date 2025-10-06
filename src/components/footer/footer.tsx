import './footer.css'
import { LinkedInIcon, TwitterIcon, InstaIcon } from '../../assets/svg/svg-export'

const Footer = () => {
  return (
<footer>
  <div className="footer-content">
    <div className="footer-description">
      <h1>Unilag Design Studio</h1>
      <p>A creative hub powered by UNILAG and 
        RICE360, equipping students with hands-on
        experience in engineering, healthcare 
        innovation, and cutting-edge technology.</p>
    </div>
    <div className="footer-links">
      <h1>Socials</h1>
      <div className='social-icons'>
        <a href="https://www.instagram.com/uds_innovationhub?igsh=MTNqeDBzczh2eGRxNw%3D%3D&utm_source=qr"><InstaIcon/></a>
      <a href="https://www.linkedin.com/in/unilag-design-studio-0235b4235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon/></a>
      <a href="https://x.com/unilag_design?s=11"><TwitterIcon/></a>
      </div>
    </div>
    <div className="footer-contact">
      <h1>Contact</h1>
      <p>+234 813 7500 777</p>
      <p><a href="mailto:designstudio.eng@unilag.edu.ng">designstudio.eng@unilag.edu.ng</a></p>
      <p>UNILAG Design Studio Headquarters:
        3rd Floor Systems Engineering Building,
        UNILAG, Lagos State, 10001,
        Nigeria.</p> 
        <p> Open Hours: 8AM - 4PM
          Monday - Friday
        </p>
    </div>
  </div>
  <hr className="footer-separator" />
  <div className="footer-bottom">
    <span>2025 UNIVERSITY OF LAGOS</span>
    <a id='home' href="#">Back to Top</a>
  </div>
</footer>
  )
}

export default Footer