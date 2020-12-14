const mongoose: any = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/test`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db: any = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected")
});

module.exports = db;
