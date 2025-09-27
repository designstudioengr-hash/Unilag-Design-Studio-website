import './about.css'

import img1 from '../../assets/focus.png'
import img2 from '../../assets/mentor.png'
import img3 from '../../assets/collaborative.png'
import img4 from '../../assets/handson.png'
import img5 from '../../assets/summer.png'

const themes = [
	{
	img: img1,
	title: 'Engineering Focus',
	desc: 'Driving innovation through practical engineering solutions, with a special emphasis on healthcare technologies that improve and save lives.',
},
{
	img: img2,
	title: 'Mentorship & Expertise',
	desc: 'Learn directly from industry experts and experienced engineers who guide you through real-world challenges.',
},
{
	img: img3,
	title: 'Collaborative Environment',
	desc: 'Work in a team-driven setting where diverse skills and ideas come together to solve complex problems creatively.',
},
{
	img: img4,
	title: 'Hands-On Experience',
	desc: 'Gain practical, project-based experience that takes you beyond theory, preparing you for real industry demands.',
},
{
	img: img5,
	title: 'Summer Internship Program',
	desc: 'A focused, immersive program that equips you with industry knowledge, technical skills, and professional connections for your future.',
},

]

const About = () => {
	return (
		<div id='about' className="about-container">
			<div className="about-header">
				<div>
					<h1>
						Core Themes That
						<br />
						Drive Our Innovation
					</h1>
				</div>
				{/* <button className="about-learn-btn">Learn More</button> */}
			</div>
			<div className="themes-grid">
				{themes.map((theme, idx) => (
					<div className="theme-card" key={idx}>
						<img src={theme.img} alt={theme.title} />
						<div className="theme-content">
							<h2>{theme.title}</h2>
							<p>{theme.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default About