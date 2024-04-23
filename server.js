const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
mongoose.set("strictQuery", true);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://sriram:sriram@cluster0.zlzti3b.mongodb.net/Podcast', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
const podcastRoutes = require('./routes/podcastRoutes');
app.use('/api/podcasts', podcastRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
