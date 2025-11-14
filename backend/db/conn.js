const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.rkj9zez.mongodb.net/?appName=Cluster0`)

    console.log("Conectado com sucesso!")
}

main().catch((error) => console.log(error))

module.exports = main;