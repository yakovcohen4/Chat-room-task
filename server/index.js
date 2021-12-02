const app = require('./app');

const PORT = process.env.PORT || 8080;

mongoose
  .connect(mongo)
  .then(result => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
