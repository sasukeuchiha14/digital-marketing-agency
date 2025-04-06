const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

// Initialize Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "pixelperfect";
const collectionName = "messages";

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully");
    
    // Create database and collection if they don't exist
    const db = client.db(dbName);
    const collections = await db.listCollections({ name: collectionName }).toArray();
    
    if (collections.length === 0) {
      await db.createCollection(collectionName);
      console.log(`Created collection: ${collectionName}`);
    }
    
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

// ----------------------------------------------------------------------------------------------------

// API route to fetch client testimonials
// This endpoint fetches the top 3 testimonials from the database
app.get('/api/clients-responses', async (req, res) => {
  try {
    const db = client.db(dbName);
    const clientsResponseCollection = db.collection('clientsResponse');
    
    // Get the top 3 testimonials
    const testimonials = await clientsResponseCollection.find().limit(3).toArray();
    
    res.status(200).json({
      success: true,
      data: testimonials
    });
    
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching testimonials',
      error: error.message
    });
  }
});

// ----------------------------------------------------------------------------------------------------

// API to fetch our success stories
// This endpoint fetches the top 3 success stories from the database
app.get('/api/success-stories', async (req, res) => {
  try {
    const db = client.db(dbName);
    const successStoriesCollection = db.collection('successStories');
    
    // Get the top 3 success stories
    const successStories = await successStoriesCollection.find().limit(3).toArray();
    
    res.status(200).json({
      success: true,
      data: successStories
    });
    
  } catch (error) {
    console.error('Error fetching success stories:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching success stories',
      error: error.message
    });
  }
});

// ----------------------------------------------------------------------------------------------------

// API route to handle contact form submissions
app.post('/api/message', async (req, res) => {
  try {
    const db = client.db(dbName);
    const messagesCollection = db.collection(collectionName);
    
    // Get form data from request body
    const { firstName, lastName, email, phone, company, budget, message, regarding } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message || !regarding) {
      return res.status(400).json({
        success: false,
        message: 'Required fields are missing'
      });
    }
    
    // Create a new message document
    const newMessage = {
      firstName,
      lastName,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      budget: budget || 'Not specified',
      message,
      regarding,
      createdAt: new Date()
    };
    
    // Insert the message into the database
    const result = await messagesCollection.insertOne(newMessage);
    
    if (result.acknowledged) {
      res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully!',
        id: result.insertedId
      });
    } else {
      throw new Error('Failed to insert document');
    }
    
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
      error: error.message
    });
  }
});

// ----------------------------------------------------------------------------------------------------

// API route to fetch frequently asked questions
// This endpoint fetches the top 4 FAQ items from the database
app.get('/api/frequently-asked-questions', async (req, res) => {
  try {
    const db = client.db(dbName);
    const askedQuestionsCollection = db.collection('askedQuestions');
    
    // Get the top 4 FAQ items
    const questions = await askedQuestionsCollection.find().limit(4).toArray();
    
    res.status(200).json({
      success: true,
      data: questions
    });
    
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching FAQs',
      error: error.message
    });
  }
});

// ----------------------------------------------------------------------------------------------------

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// ----------------------------------------------------------------------------------------------------

// Start the server
async function startServer() {
  try {
    const db = await connectToMongoDB();
    
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      console.log(`Connected to database: ${dbName}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection...');
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});

// Start the server
startServer();