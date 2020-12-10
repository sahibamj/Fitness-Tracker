let mongoose = require('mongoose');

const server = 'sahiba:uhktTnalv7EOmNUQ@cluster0.befvm.mongodb.net';
const database = 'tracking';

class Database {
  constructor() {
    this.connect();
  }
  
  connect() {
    mongoose.connect(`mongodb+srv://${server}/${database}?retryWrites=true&w=majority`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => console.error('Database connection error', err));
  }
}

module.exports = new Database()