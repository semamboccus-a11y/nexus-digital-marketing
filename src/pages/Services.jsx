import { motion } from 'framer-motion'
import { FaRocket, FaStar, FaCheck } from 'react-icons/fa'
import '../styles/Services.css'

export default function Services({ onNavigate }) {
  const services = [
    {
      id: 1,
      title: 'Social Media Management',
      description: 'We manage your business Facebook, Instagram and LinkedIn page to ensure consistent growth, engagement, and visibility.',
      price: 'Rs 1500',
      icon: '📱',
      color: '#0066CC'
    },
    {
      id: 2,
      title: 'Website Design & Development',
      description: 'We design modern, responsive, and user-friendly websites that represent your business professionally online.',
      price: 'Rs 4500',
      icon: '🌐',
      color: '#FF6600'
    },
    {
      id: 3,
      title: 'Logo Design',
      description: 'We create unique and professional logos that reflect your brand identity.',
      price: 'Rs 800',
      icon: '🎨',
      color: '#001A4D'
    },
    {
      id: 4,
      title: 'Branding & Content Creation',
      description: 'We develop consistent and attractive visual content aligned with your brand.',
      price: 'Rs 1500',
      icon: '🖼',
      color: '#0066CC'
    },
    {
      id: 5,
      title: 'Flyer & Poster Design',
      description: 'We design eye-catching promotional materials for both digital and print use.',
      price: 'Rs 1500',
      icon: '📄',
      color: '#FF6600'
    },
    {
      id: 6,
      title: 'Business Card Design',
      description: 'We create professional business card designs that reflect your brand.',
      price: 'Rs 300',
      icon: '💼',
      color: '#001A4D'
    },
    {
      id: 7,
      title: 'Video Advertising',
      description: 'We create engaging video content for marketing and promotional purposes.',
      price: 'Rs 2500',
      icon: '🎥',
      color: '#0066CC'
    },
    {
      id: 8,
      title: 'Digital Advertising',
      description: 'We plan and manage paid advertising campaigns to maximize your reach and results.',
      price: 'Rs 1500',
      icon: '📢',
      color: '#FF6600'
    },
    {
      id: 9,
      title: 'Performance Monitoring & Reporting',
      description: 'We track and evaluate the performance of your digital activities to ensure continuous improvement.',
      price: 'Rs 1500',
      icon: '📊',
      color: '#001A4D'
    }
  ]

  const packages = [
    {
      name: 'BASIC',
      price: 'RS 1700',
      period: '/Month',
      color: '#6B46C1',
      features: [
        'Social Media Management',
        'Logo & Brand Identity Design',
        'Ongoing Support & Consultation',
        'Facebook Ads & Boosting',
        'Flyers, Posters & Business Card Design'
      ]
    },
    {
      name: 'STANDARD',
      price: 'RS 4500',
      period: '/Month',
      color: '#FCD34D',
      textColor: '#000',
      features: [
        'Social Media Management',
        'Logo & Brand Identity Design',
        'Ongoing Support & Consultation',
        'Facebook Ads & Boosting',
        'Flyers, Posters & Business Card Design',
        'Video Advertising (Promotional Videos)',
        'Website Design & Maintenance'
      ],
      featured: true
    },
    {
      name: 'PREMIUM',
      price: 'RS 8300',
      period: '/Month',
      color: '#6B46C1',
      features: [
        'Social Media Management',
        'Logo & Brand Identity Design',
        'Ongoing Support & Consultation',
        'Facebook Ads & Boosting',
        'Flyers, Posters & Business Card Design',
        'Video Advertising (Promotional Videos)',
        'Digital Advertising Strategy',
        'Website Design & Maintenance',
        'Content Creation & Post Design'
      ]
    }
  ]

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
    <div className="services-page">
      {/* Services Header */}
      <motion.section 
        className="services-header services-header-mobile"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Comprehensive digital marketing solutions tailored to your business needs
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="services-grid services-grid-mobile"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            style={{ '--card-color': service.color }}
          >
            <div className="card-header">
              <div className="service-icon">{service.icon}</div>
              <div className="card-accent"></div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-price">
              <span>Starting from:</span>
              <strong>{service.price}</strong>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Nexus 360 Section */}
      <motion.section 
        className="nexus-360"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="nexus-360-header">
          <motion.div 
            className="header-icon"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <FaRocket />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nexus 360° Marketing Solution
          </motion.h2>
        </div>

        <motion.p 
          className="solution-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A complete, all-in-one digital marketing solution designed to help your business grow, attract customers, and build a strong online presence — all managed for you in one simple monthly plan.
        </motion.p>
      </motion.section>

      {/* Pricing Packages */}
      <motion.section 
        className="pricing-section"
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
          Nexus 360° Marketing Solution Pricing List
        </motion.h2>

        <motion.div 
          className="packages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              style={{ 
                backgroundColor: pkg.color,
                color: pkg.textColor || '#FFFFFF'
              }}
            >
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
              </div>

              <ul className="features-list">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="package-btn"
                onClick={() => {
                  const message = `I am interested in the ${pkg.name} package (${pkg.price}${pkg.period}). Please provide more details.`
                  onNavigate('contact')
                  setTimeout(() => {
                    const messageField = document.getElementById('message')
                    if (messageField) messageField.value = message
                  }, 100)
                }}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="benefits-section"
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
          Why Choose Nexus 360°?
        </motion.h2>

        <motion.div 
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: 'Increase Your Online Visibility', desc: 'Get discovered by your target audience across all digital channels' },
            { title: 'Attract More Customers', desc: 'Convert visitors into loyal customers with strategic marketing' },
            { title: 'Build a Strong Brand', desc: 'Establish a professional and memorable brand presence' },
            { title: 'Save Time & Resources', desc: 'Outsource your marketing and focus on running your business' },
            { title: 'Consistent Quality Content', desc: 'Receive high-quality, regular content aligned with your brand' },
            { title: 'Measurable Growth', desc: 'Track real, tangible results and business growth' }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="benefit-icon">
                <FaStar />
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="solution-tagline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let us handle your digital marketing while you focus on running your business. Start growing your business today with Nexus Digital Marketing.
        </motion.p>
      </motion.section>
    </div>
  )
}
