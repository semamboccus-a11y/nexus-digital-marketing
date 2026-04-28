import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import '../styles/Home.css'

export default function Home({ onNavigate }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const features = [
    'Creative Excellence',
    'Results-Driven',
    'Affordable Solutions',
    'Professional Team'
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-background">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Welcome to <span className="brand-highlight">Nexus</span> Digital Marketing
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            Transform Your Business with Innovative Digital Solutions
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-description">
            <p>At Nexus Digital Marketing, we believe every business has the potential to stand out, connect with its audience, and achieve meaningful growth through the right digital strategies.</p>
          </motion.div>

          <motion.button 
            variants={itemVariants}
            className="cta-button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('services')}
          >
            Get Started <FaArrowRight />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="features-container">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="feature-icon" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Preview Section */}
      <motion.section 
        className="about-preview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-content">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Nexus Digital Marketing
          </motion.h2>
          
          <motion.div 
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              Nexus Digital Marketing is a results-driven digital marketing agency dedicated to helping businesses build a strong and professional online presence.
            </motion.p>
            <motion.p variants={itemVariants}>
              We specialize in social media management, website design, branding, content creation, and digital advertising. Our approach combines creativity, strategy, and technology to deliver solutions that are both visually appealing and performance-focused.
            </motion.p>
            <motion.p variants={itemVariants}>
              We work closely with our clients to understand their goals and provide tailored digital marketing solutions that drive engagement, increase visibility, and generate real business growth.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="stats-container">
          {[
            { number: '9+', label: 'Services' },
            { number: '100%', label: 'Dedication' },
            { number: '∞', label: 'Growth Potential' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="cta-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p variants={itemVariants}>
            Let us help you achieve your digital marketing goals and reach new heights
          </motion.p>
          <motion.button 
            variants={itemVariants}
            className="cta-button-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
          >
            Start Your Journey <FaArrowRight />
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  )
}
