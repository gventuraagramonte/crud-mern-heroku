const mongoose = require('mongoose')

const URI = 'mongodb+srv://armitage_user:G1V3NTUR4@armitage-m2xao.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI)
  .then(db => console.log('DB is connect'))
  .catch(err => console.error(err))

module.exports = mongoose
