import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import api_routes from './routes/api_routes.js';
import htmlRoutes from './routes/htmlRoutes.js';
const app = express();
const PORT = process.env.PORT || 3333;
// Static Middleware: 
// Allows the client access to an entire folder and all of the files within that folder
// Creates a GET route for every file within the shared folder  
app.use(express.static('../vite-project/dist'));
//Load in API routes 
app.use(api_routes);
// Load in HTML routes
app.use(htmlRoutes);
// start the server
app.listen(PORT, () => {
    console.log('Server started on port 3333');
});
