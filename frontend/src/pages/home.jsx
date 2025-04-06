import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // State for testimonials
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setTestimonialsLoading(true);
        // Replace with your API endpoint
        const response = await fetch('http://localhost:5000/api/clients-responses');
        
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        
        const data = await response.json();
        setTestimonials(data.data);
        setTestimonialsError(null);
      } catch (error) {
        // Handle error and set error state
        // Log error to console for debugging
        console.error('Error fetching testimonials:', error);
        setTestimonialsError('Failed to load testimonials');
        // Fallback data in case API fails
        setTestimonials([
          {
            quote: "PixelPerfect transformed our online presence completely. Our leads have increased by 200% since we started working with them.",
            author: "Sarah Johnson",
            company: "TechSolutions Inc."
          },
          {
            quote: "The team's expertise in SEO and content marketing helped us rank #1 for our key industry terms. Highly recommended!",
            author: "Michael Chen",
            company: "GrowthHub"
          },
          {
            quote: "Professional, responsive, and results-driven. Our social media engagement has never been higher.",
            author: "Emma Thompson",
            company: "Retail Innovations"
          }
        ]);
      } finally {
        // Set loading state to false regardless of success or failure
        setTestimonialsLoading(false);
      }
    };
    
    fetchTestimonials();
  }, []);

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24 px-6 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Transform Your Digital Presence</h1>
          <p className="text-xl mb-8">We help businesses grow through strategic digital marketing solutions that drive results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Redirect to services and contact page */}
            <Link to="/services" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition">Our Services</Link>
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Digital Marketing Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            // Can give Images instead of icons just by giving img in img tag for icon
            {
              title: "SEO Optimization",
              description: "Boost your search rankings and drive organic traffic to your website.",
              icon: "📈"
            },
            {
              title: "Social Media Marketing",
              description: "Engage with your audience and build brand awareness across platforms.",
              icon: "🔄"
            },
            {
              title: "Content Creation",
              description: "Compelling content that connects with your audience and converts.",
              icon: "✏️"
            },
            {
              title: "PPC Advertising",
              description: "Targeted campaigns that maximize ROI and drive qualified leads.",
              icon: "💰"
            },
            {
              title: "Email Marketing",
              description: "Nurture leads and build customer loyalty with strategic campaigns.",
              icon: "📧"
            },
            {
              title: "Analytics & Reporting",
              description: "Data-driven insights to refine and optimize your marketing strategy.",
              icon: "📊"
            }
          ].map((service, index) => (

            // Design for each service
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          {/* Redirect to services page */}
          <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">View All Services</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

          {testimonialsError && (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-center">
              {testimonialsError}
            </div>
          )}

          {testimonialsLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                // Design for each testimonial
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Get started with a free digital marketing consultation today.</p>
          {/* Redirect to contact page */}
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">Schedule a Call</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;