const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://tarunpremnath4001:tarunat123@cluster0.ts5zfv3.mongodb.net/?retryWrites=true&w=majority")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}