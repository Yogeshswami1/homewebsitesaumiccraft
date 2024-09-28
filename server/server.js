// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import path from 'path';
// import authRoutes from './routes/authRoutes.js';
// import blogRoutes from './routes/blogRoutes.js';
// import uploadRoutes from './routes/uploadRoutes.js'; // Import upload routes
// import dotenv from 'dotenv';
// import eventRoutes from './routes/eventRoutes.js';
// import newsletterRoutes from './routes/newsletterRoutes.js';




// dotenv.config();


// // Create express app
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Serve static files (for serving uploaded images)
// app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// // Connect to MongoDB
// mongoose
//   .connect('mongodb+srv://saumic:saumic123@cluster0.pxceo4x.mongodb.net/homepage')
//   .then(() => {
//     console.log('Successfully connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/upload', uploadRoutes); // Use the upload routes
// app.use('/events', eventRoutes);
// app.use('/api/newsletter', newsletterRoutes);



// // Start the server
// const PORT = 5009;
// app.listen(PORT, () => console.log(`Server Initialized on ${PORT}`));


import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'; // Import upload routes
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

dotenv.config(); // Load environment variables from .env file

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());

// CORS setup
const corsOptions = {
  origin: 'https://1backend.saumiccraft.com', // Allow all origins. You can restrict this to specific domains by listing them.
  // origin: 'http://localhost:3000', // Allow all origins. You can restrict this to specific domains by listing them.

  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
app.use(cors(corsOptions));

// Serve static files (for serving uploaded images)
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Connect to MongoDB using the URI from the .env file
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/upload', uploadRoutes); // Use the upload routes
app.use('/events', eventRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Start the server using the PORT from the .env file
const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`Server Initialized on ${PORT}`));
