import { useState } from 'react'
import './contact.css'

const testimonials = [
  {
    text: "The studio is a beautiful space that encourages growth for young innovative minds",
    author: " Adigun Noahson, 2025"
  },
  {
    text: "The studio kindled my passion for engineering and design. The hands-on experience was transformative.",
    author: " Iqma, 2025"
  },
  {
    text: "The studio helped me rediscover my love for engineering and made me grow as an engineer and as a person.",
    author: " Adebayo Oluwatosin, 2025"
  },
]

const faqData = [
  {
    question: "Who can use the UNILAG Design Studio?",
    answer: "All UNILAG students, faculty, and registered program participants can use the studio facilities and resources."
  },
  {
    question: "How do I book the studio for a project?",
    answer: "You can book the studio by contacting the studio coordinator."
  },
  {
    question: "Is there any cost to use the studio?",
    answer: "A sum of three thousand naira will be paid to use the studio workspace for a day. Some specialized workshops may have a nominal fee."
  },
  {
    question: "What equipment is available in the studio?",
    answer: "The studio is equipped with 3D printers, prototyping tools, computers with design software, and collaborative workspaces."
  }
]

const Contact = () => {
  const [current, setCurrent] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div id='contact' className="contact-container">
      <h1 className="contact-title">Voices from Our Community</h1>
      <div className="testimonial-slider">
        <div className="testimonial-quote">
          <span className="testimonial-quote-icon">“</span>
          <p>{testimonials[current].text}</p>
          <span className="testimonial-author">{testimonials[current].author}</span>
        </div>
        <div className="testimonial-nav">
          <button className="testimonial-arrow" onClick={prevTestimonial}>{'<'}</button>
          <button className="testimonial-arrow" onClick={nextTestimonial}>{'>'}</button>
        </div>
      </div>
      <section className="faq-section">
        <h2 className="faq-title">Your Questions,<br />Clearly Answered.</h2>
        <div className="faq-content">
          <div className="faq-list">
            {faqData.map((item, idx) => (
              <div key={idx} className={`faq-item${openFaq === idx ? ' open' : ''}`}>
                <div className="faq-question-header">
                  <p className="faq-question">
                    {item.question}
                  </p>
                  <span
                    className="faq-arrow"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    ▸
                  </span>
                </div>
                <div className={`faq-answer ${openFaq === idx ? 'visible' : 'hidden'}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact