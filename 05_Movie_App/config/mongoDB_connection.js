const mongoose =   require("mongoose")

const DB_connection = (req, res) => {
    mongoose.connect("mongodb+srv://yogeshrd1708:yogesh17RD@cluster0.8rdbura.mongodb.net/")
    .then("connection successfully ")
    .catch((err) =>  console.log(err))
}

module.exports = DB_connection;