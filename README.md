# PixelPerfect - A Digital Marketing Agency

## Project Overview

PixelPerfect is a full-stack web application for a digital marketing agency built with React, TailwindCSS, Express, and MongoDB. The platform showcases the agency's services, case studies, digital marketing products, and features a contact system that stores client inquiries in a MongoDB database.

## 🌐 Live Demo

Check out the live demo: [PixelPerfect Agency](https://pixelperfect.hardikgarg.me)

## 🚀 Features

- **Responsive Design**: Built with a mobile-first approach using TailwindCSS
- **Modern React Architecture**: Utilizes React 19 with a component-based structure
- **Full-stack Integration**: Backend API with Express connected to MongoDB
- **Interactive UI Elements**: Dynamic components with smooth transitions and state management
- **Form Validation & Submission**: Contact form with client-side validation and API integration
- **API Integration**: Dynamic content loading from backend endpoints
- **Error Handling**: Comprehensive error states with fallback data

### Pages & Components

- **Home Page**: Agency introduction with service highlights and dynamic testimonials
- **About Page**: Company story, values, and team members
- **Services Page**: Detailed service offerings with features and CTAs
- **Case Studies**: Success stories with measurable results and industry categorization
- **Shop**: E-commerce section with digital marketing templates, courses, and tools
- **Contact**: Interactive form with MongoDB integration for inquiry management

## 🛠️ Technology Stack

### Frontend
- React 19
- React Router Dom 7
- TailwindCSS 4
- Vite 6 (Build tool)

### Backend
### Backend
- Express.js
- MongoDB / MongoDB Atlas
- Node.js
- Mongoose ORM
- Body-parser
- CORS
- Nodemon (for development)

## 📋 Project Structure

```
digital-marketing-agency/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── header.jsx
│   │   ├── pages/
│   │   │   ├── home.jsx
│   │   │   ├── about.jsx
│   │   │   ├── services.jsx
│   │   │   ├── case-studies.jsx
│   │   │   ├── shop.jsx
│   │   │   └── contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
├── backend/
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Installation & Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/sasukeuchiha14/digital-marketing-agency.git
    cd digital-marketing-agency
    ```

2. **Install frontend dependencies**
    ```bash
    cd frontend
    npm install
    ```

3. **Install backend dependencies**
    ```bash
    cd ../backend
    npm install
    ```

4. **Set up MongoDB**
    - Ensure MongoDB is running locally
    - Or configure MongoDB Atlas connection string in backend/server.js

5. **Start the backend server**
    ```bash
    cd backend
    node server.js
    ```

6. **Start the frontend development server**
    ```bash
    cd frontend
    npm run dev
    ```

7. **Access the application**
    - Frontend: http://localhost:5173
    - Backend API: http://localhost:5000

## 📝 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/clients-responses` | GET | Fetch client testimonials |
| `/api/success-stories` | GET | Fetch case study data |
| `/api/message` | POST | Submit contact form data |
| `/api/frequently-asked-questions` | GET | Fetch FAQ data |
| `/api/health` | GET | Server health check |

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🔧 Development Features

- **ESLint Configuration**: Modern JavaScript linting with React-specific rules
- **Error Handling**: Comprehensive error states with fallback content
- **API Integration**: Dynamic content loading with loading states
- **Component Structure**: Reusable, modular components

## 🚀 Deployment

### Frontend Deployment
- Build the production version: `npm run build`
- Deploy the `dist` directory to any static hosting service like Netlify, Vercel, or GitHub Pages

### Backend Deployment
- Deploy to a Node.js hosting platform like Heroku, Render, or Railway
- Set up environment variables for production MongoDB connection

## 🛠️ Future Improvements

- User authentication system
- Admin dashboard for content management
- Blog section with CMS integration
- Online payment processing for digital products
- Enhanced analytics and reporting features
- Email newsletter subscription system

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
Anyone is free to use, modify, and distribute this code.

## 👨‍💻 Author

**Hardik Garg**
- GitHub: [sasukeuchiha14](https://github.com/sasukeuchiha14)
- LinkedIn: [hardikgarg01](https://www.linkedin.com/in/hardikgarg01/)
- Portfolio: [hardikgarg.me](https://hardikgarg.me/)

## 🙏 Acknowledgements

- React.js Team
- TailwindCSS Team
- Express.js and MongoDB communities
- All open-source contributors
- Next24Tech for the opportunity to work on this project

---

Developed as part of a web development internship project. This full-stack application demonstrates modern web development practices and showcases my skills in React, Node.js, and database integration.
