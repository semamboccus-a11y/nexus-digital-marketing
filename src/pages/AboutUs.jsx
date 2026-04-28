import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'
import '../styles/AboutUs.css'

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const reasons = [
    { 
      icon: FaHeart, 
      title: 'Creative Excellence', 
      desc: 'We combine creativity with strategy to deliver visually stunning and effective solutions.' 
    },
    { 
      icon: FaBullseye, 
      title: 'Results-Driven Approach', 
      desc: 'Every strategy is designed to deliver measurable results and real business growth.' 
    },
    { 
      icon: FaHeart, 
      title: 'Affordable Solutions', 
      desc: 'We offer high-quality services at competitive prices, perfect for businesses of all sizes.' 
    },
    { 
      icon: FaBullseye, 
      title: 'Personalized Service', 
      desc: 'We work closely with each client to understand their unique needs and goals.' 
    },
    { 
      icon: FaHeart, 
      title: 'Professional Team', 
      desc: 'Our experienced team brings expertise across all aspects of digital marketing.' 
    },
    { 
      icon: FaBullseye, 
      title: 'Long-Term Partnership', 
      desc: 'We\'re committed to building lasting relationships and supporting your continued growth.' 
    }
  ]

  return (
    <div className="about-page">
      {/* About Header */}
      <motion.section 
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Learn more about Nexus Digital Marketing and our commitment to your success
        </motion.p>
      </motion.section>

      {/* About Content */}
      <motion.section 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Who We Are */}
        <motion.div className="about-section" variants={itemVariants}>
          <h2>Who We Are</h2>
          <p>Nexus Digital Marketing is a results-driven digital marketing agency dedicated to helping businesses build a strong and professional online presence.</p>
          <p>We specialize in social media management, website design, branding, content creation, and digital advertising. Our approach combines creativity, strategy, and technology to deliver solutions that are both visually appealing and performance-focused.</p>
          <p>We work closely with our clients to understand their goals and provide tailored digital marketing solutions that drive engagement, increase visibility, and generate real business growth.</p>
          <p>Whether you are a startup or an established company, we act as your digital growth partner—committed to your success.</p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div 
          className="mission-vision-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mission */}
          <motion.div className="mvv-card" variants={itemVariants}>
            <div className="mvv-icon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>Our mission is to empower businesses by providing innovative, effective, and affordable digital marketing solutions that enhance their online presence, attract customers, and drive sustainable growth.</p>
            <p className="mvv-subtitle">We aim to deliver high-quality services with professionalism, creativity, and a strong focus on results.</p>
          </motion.div>

          {/* Vision */}
          <motion.div className="mvv-card" variants={itemVariants}>
            <div className="mvv-icon vision-icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>Our vision is to become a trusted and leading digital marketing agency, recognized for delivering impactful digital solutions that transform businesses and help them succeed in an ever-evolving digital landscape.</p>
            <p className="mvv-subtitle">We aspire to build long-term partnerships with our clients and be a key contributor to their growth and success.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="why-choose-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Nexus Digital Marketing?
        </motion.h2>

        <motion.div 
          className="reasons-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                className="reason-item"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 102, 204, 0.2)' }}
              >
                <div className="reason-icon">
                  <Icon />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Partner with Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's work together to transform your business and achieve your digital marketing goals
        </motion.p>
      </motion.section>
    </div>
  )
}
