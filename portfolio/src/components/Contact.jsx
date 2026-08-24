import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'manthanpatel966@gmail.com', href: 'mailto:manthanpatel966@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 91069 55621', href: 'tel:+919106955621' },
  { icon: MapPin, label: 'Location', value: 'Kudasan, Gandhinagar, India', href: null },
  { icon: Github, label: 'GitHub', value: '@Manthanpatel5517', href: 'https://github.com/Manthanpatel5517' },
  { icon: Linkedin, label: 'Instagram', value: '@manthan_5517', href: 'https://www.instagram.com/manthan_5517/' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject.trim()) e.subject = 'Please enter a subject.'
    if (!form.message.trim()) e.message = 'Please write a message.'
    return e
  }

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section section--muted">
      <div className="section-inner">
        <p className="section__eyebrow">06 · Contact</p>
        <h2 className="section__title">Let's Work Together</h2>
        <p className="section__lead">
          Have an opportunity, a project, or just want to say hi? My inbox is open.
        </p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={errors.name ? 'has-error' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={errors.email ? 'has-error' : ''}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={handleChange('subject')}
                className={errors.subject ? 'has-error' : ''}
                placeholder="What's this about?"
              />
              {errors.subject && <span className="field-error">{errors.subject}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                className={errors.message ? 'has-error' : ''}
                placeholder="Tell me a bit about the opportunity or project..."
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary btn--full">
              Send Message <Send size={18} />
            </button>

            {submitted && (
              <p className="form-success">
                <CheckCircle2 size={18} /> Message ready — I'll get back to you soon!
              </p>
            )}
          </form>

          <div className="contact-cards">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <Icon className="contact-card__icon" size={20} />
                  <div>
                    <span className="contact-card__label">{label}</span>
                    <span className="contact-card__value">{value}</span>
                  </div>
                </>
              )
              return href ? (
                <a className="contact-card" href={href} target="_blank" rel="noreferrer" key={label}>
                  {content}
                </a>
              ) : (
                <div className="contact-card" key={label}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
