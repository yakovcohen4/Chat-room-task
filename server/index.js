const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8080;
const mongo = process.env.DATABASE;

// connecting to database + listen
mongoose
  .connect(mongo)
  .then(result => {
    console.log('connected to MongoDB');
    app.listen(PORT, () =>
      console.log(`app listening at http://localhost:${PORT}`)
    );
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });
