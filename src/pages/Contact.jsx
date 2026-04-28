import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      const mailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`
      window.location.href = `mailto:info@nexusdigitalmarketing.net?subject=${encodeURIComponent(formData.subject)}&body=${mailBody}`
      
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      }, 3000)
    } else {
      setErrors(newErrors)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="contact-page">
      {/* Contact Header */}
      <motion.section 
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get in touch with Nexus Digital Marketing today
        </motion.p>
      </motion.section>

      {/* Contact Content */}
      <motion.section 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Contact Info */}
        <motion.div className="contact-info" variants={itemVariants}>
          <h2>Let's Connect</h2>
          <p>Have a question or ready to get started? We'd love to hear from you. Reach out to us using the contact form or through our social media channels.</p>
          
          <motion.div 
            className="info-items"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone */}
            <motion.div className="info-item" variants={itemVariants}>
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <a href="tel:+23058219355">+230 58219355</a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="info-item" variants={itemVariants}>
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href="mailto:info@nexusdigitalmarketing.net">info@nexusdigitalmarketing.net</a>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div className="info-item" variants={itemVariants}>
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <motion.a 
                    href="https://www.facebook.com/NexusDigitalMU/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Facebook"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Instagram"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a 
                    href="https://wa.me/23058219355" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="contact-form-section" variants={itemVariants}>
          <h2>Send us a Message</h2>
          
          {submitted && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <FaCheckCircle />
              <p>Thank you! Your message has been sent successfully.</p>
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project or inquiry"
                rows="6"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  )
}
