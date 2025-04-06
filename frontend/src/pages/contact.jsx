import React, { useState } from 'react';

const Contact = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: ''
    });
    
    // State for form submission status
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Create the body object
        const body = {
            regarding: document.getElementById('form-regarding').value,
            ...formData
        };

        // Validate the form data (basic validation)
        try {
            // Send the form data to the server
            const response = await fetch('http://localhost:5000/api/mail', {
                // Replace with your actual API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json();
                // Assuming the API returns a success message or status
                console.log('Success:', data);
                
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: 'Your message has been sent successfully! We\'ll be in touch soon.'
                });
                
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    budget: '',
                    message: ''
                });
            } else {
                // Handle errors from the server
                console.error('Error:', response.statusText);
                setFormStatus({
                    submitted: true,
                    success: false,
                    message: 'Failed to send message. Please try again or contact us directly.'
                });
            }
        } catch (error) {
            // Handle network errors or other unexpected errors
            console.error('Error:', error);
            setFormStatus({
                submitted: true,
                success: false,
                message: 'An error occurred. Please try again or contact us directly.'
            });
        } finally {
            // Reset loading state
            setIsLoading(false);
            // Scroll to top to show the status message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 rounded-lg">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing Together</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Ready to elevate your digital presence? We're here to help you achieve your marketing goals.
                    </p>
                </div>
            </section>

            {/* Status Message Display */}
            {formStatus.submitted && (
                <div className={`p-4 rounded-lg text-center ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    <p className="text-lg font-medium">{formStatus.message}</p>
                </div>
            )}

            {/* Contact Info + Form Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Contact Information */}
                <div className="lg:col-span-1 bg-gray-50 p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Email Us</p>
                            <a href="mailto:contact@pixelperfect.com" className="text-blue-600 hover:underline">contact@pixelperfect.com</a>
                        </div>
                        
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Call Us</p>
                            <a href="tel:+11234567890" className="text-blue-600 hover:underline">(123) 456-7890</a>
                        </div>
                        
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Visit Our Office</p>
                            <address className="not-italic text-gray-600">
                                123 Marketing Street<br />
                                Suite 456<br />
                                San Francisco, CA 94107
                            </address>
                        </div>
                        
                        <div>
                            <p className="font-medium text-gray-700 mb-3">Follow Us</p>
                            <div className="flex space-x-4">
                                {/* Social Media Icons */}
                                {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                                    <a 
                                        key={platform}
                                        href={`https://${platform}.com/pixelperfect`} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition"
                                    >
                                        <span className="sr-only">{platform}</span>
                                        <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                                            <span className="text-xs">{platform[0].toUpperCase()}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Tell Us About Your Project</h2>
                    <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Name Fields */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                                <input 
                                    id="form-first-name" 
                                    type="text" 
                                    name="firstName" 
                                    value={formData.firstName} 
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                                <input 
                                    id="form-last-name" 
                                    type="text" 
                                    name="lastName" 
                                    value={formData.lastName} 
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                            
                            {/* Email & Phone */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                                <input 
                                    id="form-email" 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                            
                            {/* Company & Budget */}
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input 
                                    type="text" 
                                    name="company" 
                                    value={formData.company} 
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Project Budget</label>
                                <select 
                                    name="budget" 
                                    value={formData.budget} 
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                >
                                    <option value="">Select budget range</option>
                                    <option value="Less than $5,000">Less than $5,000</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                    <option value="$25,000+">$25,000+</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Regarding & Message */}
                        <div className="mb-6">
                            <label htmlFor="form-regarding" className="block text-sm font-medium text-gray-700 mb-1">Regarding*</label>
                            <select 
                                id="form-regarding" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                required
                            >
                                <option value="">Select a topic</option>
                                <option value="Search Engine Optimization">Search Engine Optimization</option>
                                <option value="Social Media Marketing">Social Media Marketing</option>
                                <option value="Content Marketing">Content Marketing</option>
                                <option value="PPC Advertising">PPC Advertising</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Other Services">Other Services</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                            <textarea 
                                id="form-text" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange}
                                required 
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className={`w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : 'Send Message'}
                        </button>
                    </form>
                </div>
            </section>
            
            {/* Map Section */}
            <section className="bg-gray-100 p-4 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                    {/* Placeholder for Google Maps */}
                    {/* You can integrate Google Maps here using the Google Maps API or a library like google-maps-react */}
                    {/* Generate a API key from Google Cloud Console and replace the src with your map URL */}
                    {/* 
                        <Map
                            google={window.google}
                            style={{ width: '100%', height: '100%' }}
                            zoom={14}
                            initialCenter={{ lat: 12.3456, lng: -123.4567 }}
                            onClick={this.onMapClicked}
                        >
                    */}
                    <p className="text-lg mb-2">Google Maps Integration</p>
                    <p>(Map would be displayed here)</p>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            question: "How quickly can you start working on my project?",
                            answer: "We typically begin new projects within 1-2 weeks of signing the contract. For urgent needs, we also offer expedited services."
                        },
                        {
                            question: "Do you work with small businesses?",
                            answer: "Absolutely! We have tailored packages designed specifically for small businesses and startups with growth-focused strategies."
                        },
                        {
                            question: "What makes your agency different?",
                            answer: "Our data-driven approach, transparent reporting, and dedicated account managers ensure you get measurable results and personalized service."
                        },
                        {
                            question: "How long does it take to see results?",
                            answer: "While some tactics yield quick wins, digital marketing is typically a long-term investment. Most clients see meaningful results within 3-6 months."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;
