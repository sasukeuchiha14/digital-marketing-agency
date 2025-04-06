import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);

  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'templates', name: 'Marketing Templates' },
    { id: 'courses', name: 'Online Courses' },
    { id: 'tools', name: 'Digital Tools' }
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: 'SEO Starter Pack',
      category: 'templates',
      price: 49.99,
      description: 'Complete SEO audit templates, keyword research spreadsheets, and competitor analysis frameworks.',
      features: [
        '10+ ready-to-use templates',
        'Keyword research blueprint',
        'On-page optimization checklist',
        'Monthly SEO planner'
      ],
      bestseller: true
    },
    {
      id: 2,
      name: 'Social Media Content Calendar',
      category: 'templates',
      price: 29.99,
      description: 'Plan and organize your social media content across multiple platforms with our comprehensive calendar system.',
      features: [
        'Annual content planning template',
        'Platform-specific post templates',
        'Content idea generator',
        'Analytics tracking sheet'
      ],
      bestseller: false
    },
    {
      id: 3,
      name: 'Digital Marketing Fundamentals',
      category: 'courses',
      price: 199.99,
      description: 'Learn the core principles of digital marketing with this comprehensive video course.',
      features: [
        '20+ hours of video content',
        'Practical exercises & templates',
        'Certificate upon completion',
        'Lifetime access to updates'
      ],
      bestseller: true
    },
    {
      id: 4,
      name: 'Advanced PPC Mastery',
      category: 'courses',
      price: 249.99,
      description: 'Master pay-per-click advertising on Google, Facebook, and other platforms.',
      features: [
        'Campaign setup guides',
        'Bid optimization strategies',
        'Ad copywriting formulas',
        'ROI tracking systems'
      ],
      bestseller: false
    },
    {
      id: 5,
      name: 'Email Marketing Automation Tool',
      category: 'tools',
      price: 99.99,
      description: 'Streamline your email marketing with our user-friendly automation tool.',
      features: [
        'Drag-and-drop email builder',
        'Behavioral trigger setup',
        'A/B testing capabilities',
        'Analytics dashboard'
      ],
      bestseller: false
    },
    {
      id: 6,
      name: 'Competitor Analysis Software',
      category: 'tools',
      price: 149.99,
      description: 'Track your competitors\' online strategies and performance with our specialized software.',
      features: [
        'Keyword gap analysis',
        'Backlink comparison',
        'Content strategy insights',
        'Social media benchmarking'
      ],
      bestseller: true
    }
  ];

  // Filtered products based on category selection
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  // Add to cart function
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    // In a real app, you would likely have more cart functionality
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Digital Marketing Resources</h1>
        <p className="text-xl text-gray-600">
          Boost your marketing efforts with our professional templates, courses, and tools
        </p>
      </section>

      {/* Filter Section */}
      <section className="max-w-6xl mx-auto w-full px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full ${
                filter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg flex flex-col">
              {/* Product image placeholder */}
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-gray-400">Product Image</div>
              </div>
              
              {/* Product details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  {product.bestseller && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Bestseller
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <h3 className="font-medium mb-2">Features:</h3>
                <ul className="text-gray-600 space-y-1 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 text-center py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl mb-8">Our team can develop bespoke marketing resources tailored to your specific business needs.</p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shop;