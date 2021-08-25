const mongoose = require('mongoose');
const debug = require('winston');
mongoose.set('useFindAndModify', false);

// database connection
mongoose.connect('mongodb://localhost:27017/mybank', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => debug.info(`database connection successful...`))
  .catch(() => debug.info(`database connection failed...`));