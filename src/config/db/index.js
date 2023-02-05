const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tvq:Tw4pnXpkFWSAocux@cluster0.u7zv9j8.mongodb.net/?retryWrites=true&w=majority');
        console.log('connect successffly');
    } catch (error) {
        console.log('connect fal');
    }
}

module.exports = { connect };
