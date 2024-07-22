
const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect("mongodb+srv://dhrutip2005:12345@cluster0.eodm9su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected...");
    } catch (error) {
        console.log(error);
    }
}
module.exports = database;

// Nhzz4oBLXv9YssCY