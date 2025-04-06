import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About PixelPerfect Agency</h1>
        <p className="text-xl text-gray-600">
          We're a team of digital marketing experts passionate about helping businesses grow online.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-96 bg-gray-200 rounded-lg">

          {/* Placeholder for office/team image */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Team Image
          </div>

        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in Early 2025, PixelPerfect began with a simple mission: to provide businesses with 
            honest, results-driven digital marketing that actually works.
          </p>
          <p className="mb-4">
            After seeing too many businesses being sold unrealistic promises and generic strategies, 
            our founders decided to create an agency that focuses on customized solutions and 
            transparent reporting.
          </p>
          <p>
            Today, we've grown to a team of 25+ specialists across SEO, content, social media, 
            PPC, and web design - all working together to deliver integrated campaigns that drive 
            real business growth.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Results First",
                description: "We focus on metrics that matter to your business, not vanity stats."
              },
              {
                title: "Transparency",
                description: "Clear communication and honest reporting at every step of the way."
              },
              {
                title: "Innovation",
                description: "Continuously evolving our strategies to stay ahead in the digital landscape."
              },
              {
                title: "Partnership",
                description: "We see ourselves as an extension of your team, not just a service provider."
              }
            ].map((value, index) => (

              // Using index as key for simplicity, but in a real app, use a unique id if available
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              name: "Hardik Garg",
              role: "Founder & CEO",
              bio: "15+ years in digital marketing, previously led marketing at Fortune 500 companies."
            },
            {
              name: "Maya Patel",
              role: "SEO Director",
              bio: "SEO expert with experience optimizing over 200 websites across various industries."
            },
            {
              name: "David Chen",
              role: "Content Strategy Lead",
              bio: "Former journalist with a passion for storytelling and content that converts."
            },
            {
              name: "Sarah Williams",
              role: "Social Media Manager",
              bio: "Specialist in building engaged communities and creating viral campaigns."
            }
          ].map((member, index) => (

            // Using index as key for simplicity, but in a real app, use a unique id if available
            // Placeholder for team member photo
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-60 bg-gray-200">
                {/* Placeholder for team member photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
            
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Work With Us?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help your business grow.</p>
          {/* Link to contact page */}
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default About;