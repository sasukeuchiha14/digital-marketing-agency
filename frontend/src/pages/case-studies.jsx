import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  // State variables for success stories
  const [successStories, setSuccessStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch success stories from API
  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/success-stories');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setSuccessStories(data.data);
        } else {
          throw new Error(data.message || 'Failed to fetch success stories');
        }
        
      } catch (error) {
        console.error('Error fetching success stories:', error);
        setError('Failed to load success stories');
        // Fallback data in case API fails
        setSuccessStories([
          {
            title: "E-commerce Revenue Growth",
            client: "FashionHub Store",
            industry: "Retail",
            services: ["SEO", "PPC", "Social Media Marketing"],
            results: {
              trafficIncrease: "145%",
              conversionRateImprovement: "32%",
              revenueGrowth: "89%"
            },
            description: "Transformed the online presence of a struggling fashion retailer through targeted digital marketing strategies.",
            image: "fashion-case-study.jpg"
          },
          {
            title: "B2B Lead Generation Campaign",
            client: "TechSolutions Inc.",
            industry: "Software",
            services: ["Content Marketing", "Email Campaigns", "LinkedIn Advertising"],
            results: {
              leadGeneration: "210+ qualified leads",
              salesIncrease: "67%",
              costPerLead: "Reduced by 41%"
            },
            description: "Developed and executed a comprehensive B2B lead generation strategy for a SaaS company.",
            image: "tech-case-study.jpg"
          },
          {
            title: "Local Business Visibility",
            client: "Riverfront Restaurant",
            industry: "Hospitality",
            services: ["Local SEO", "Google Business Profile", "Facebook Ads"],
            results: {
              localSearchVisibility: "Top 3 positions",
              footTraffic: "52% increase",
              bookings: "73% more online reservations"
            },
            description: "Helped a local restaurant stand out in a competitive market through targeted local marketing.",
            image: "restaurant-case-study.jpg"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSuccessStories();
  }, []);

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Success Stories</h1>
        <p className="text-xl text-gray-600">
          Explore how we've helped businesses achieve remarkable growth through strategic digital marketing.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="max-w-6xl mx-auto px-4">
        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-16">
            {successStories.map((caseStudy, index) => (
              // Each case study is displayed in a card-like format
              // with a title, client name, industry, services provided, and key results
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gray-200 h-80 flex items-center justify-center">
                    {/* Placeholder for case study image */}
                    {/* Use actual image source in a real application */}
                    <span className="text-gray-400 text-lg">Case Study Image</span>
                  </div>
                  <div className="p-8">
                    {/* Case study details including title, client, industry, services, and results */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
                        <p className="text-gray-600">{caseStudy.client} · {caseStudy.industry}</p>
                      </div>
                    </div>
                    
                    <p className="mb-6">{caseStudy.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-bold mb-2">Services Provided:</h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Iterate over the services array and display each service */}
                        {caseStudy.services.map((service, idx) => (
                          <span 
                            key={idx}
                            // Each service is displayed in a badge-like format
                            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Key Results:</h3>
                      <ul className="space-y-1">
                        {/* Iterate over the results object and display each result */}
                        {Object.entries(caseStudy.results).map(([key, value], idx) => (
                          <li key={idx} className="flex items-start">
                            {/* Checkmark icon for each result */}
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span>
                              <span className="font-medium">
                                {/* Convert camelCase keys to human-readable format */}
                                {/* Like "trafficIncrease" to "Traffic Increase" */}
                                {key.replace(/([A-Z])/g, ' $1')
                                  .replace(/^./, str => str.toUpperCase())}:
                              </span> {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              // End of case study card
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8">Let's discuss how we can achieve similar results for your business.</p>
          {/* Link to the contact page */}
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;