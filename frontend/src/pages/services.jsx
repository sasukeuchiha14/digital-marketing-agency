import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    // Use images instead of icons in real implementation
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      description: 'Boost your website\'s visibility and rank higher in search engine results.',
      features: [
        'Comprehensive SEO audit',
        'Keyword research and strategy',
        'On-page optimization',
        'Technical SEO improvements',
        'Content optimization',
        'Link building'
      ],
      icon: '🔍'
    },
    {
      id: 'ppc',
      title: 'Pay-Per-Click Advertising',
      description: 'Drive targeted traffic to your website through strategic paid campaigns.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'LinkedIn advertising',
        'Ad copy creation',
        'Landing page optimization',
        'Conversion tracking'
      ],
      icon: '💰'
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience across platforms.',
      features: [
        'Social media strategy',
        'Content calendar creation',
        'Community management',
        'Influencer partnerships',
        'Paid social campaigns',
        'Analytics and reporting'
      ],
      icon: '📱'
    },
    {
      id: 'content',
      title: 'Content Marketing',
      description: 'Create valuable content that attracts, engages, and converts your target audience.',
      features: [
        'Content strategy development',
        'Blog post creation',
        'Email marketing campaigns',
        'Ebooks & whitepapers',
        'Infographics & visual content',
        'Content distribution'
      ],
      icon: '📝'
    },
    {
      id: 'web',
      title: 'Web Design & Development',
      description: 'Create a stunning, high-performance website that drives conversions.',
      features: [
        'Responsive website design',
        'UX/UI optimization',
        'E-commerce development',
        'Website maintenance',
        'Speed optimization',
        'CMS integration'
      ],
      icon: '💻'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      description: 'Gain insights into your marketing performance and make data-driven decisions.',
      features: [
        'Google Analytics setup',
        'Custom dashboard creation',
        'Monthly performance reports',
        'Conversion tracking',
        'User behavior analysis',
        'ROI calculations'
      ],
      icon: '📊'
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive digital marketing solutions tailored to your business goals.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 bg-gray-100 rounded-xl p-12 flex items-center justify-center">
                <span className="text-7xl">{service.icon}</span>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <h3 className="font-bold text-lg mb-3">What's included:</h3>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Discovery & Strategy",
                  description: "We start by understanding your business, goals, and target audience to develop a tailored strategy."
                },
                {
                  step: 2,
                  title: "Implementation",
                  description: "Our team executes the strategy, setting up campaigns, optimizing your website, and creating content."
                },
                {
                  step: 3,
                  title: "Monitoring & Optimization",
                  description: "We continuously track performance and make data-driven adjustments to maximize results."
                },
                {
                  step: 4,
                  title: "Reporting & Analysis",
                  description: "Regular reports keep you informed about progress, ROI, and insights for future strategies."
                }
              ].map((process, idx) => (
              // Using index as key for simplicity, but in a real app, use a unique id if available
                <div key={idx} className="relative flex items-center">
                  {/* Left side content */}
                  <div className={`md:w-1/2 md:pr-12 text-right ${idx % 2 !== 0 ? 'hidden md:block' : ''}`}>
                    {idx % 2 === 0 && (
                      <>
                        <h3 className="text-2xl font-bold mb-2">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </>
                    )}
                  </div>
                  
                  {/* Center step number */}
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10 mx-4 md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    {process.step}
                  </div>
                  
                  {/* Right side content */}
                  <div className={`md:w-1/2 md:pl-12 ${idx % 2 === 0 ? 'hidden md:block' : ''}`}>
                    {idx % 2 !== 0 && (
                      <>
                        <h3 className="text-2xl font-bold mb-2">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Digital Presence?</h2>
          <p className="text-xl mb-8">Let's create a customized marketing plan for your business.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">Schedule a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;