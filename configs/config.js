const db = require('mongoose');
db
.connect('mongodb://127.0.0.1:27017/sapr', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log('Connect to MongoDB'))
.catch((err) => console.log('DB connection error'));
module.exports = db; 